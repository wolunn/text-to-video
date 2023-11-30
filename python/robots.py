from serpapi import GoogleSearch
import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urlparse, unquote
from datetime import datetime

def load_topics(filename):
    """ 从文件中加载主题列表 """
    with open(filename, 'r') as file:
        return [line.strip() for line in file]

def get_urls_for_page(query, page):
    """ 对特定页进行搜索，并返回URL列表 """
    params = {
        "engine": "google",
        "q": query,
        "api_key": "73c9854424b4f17e32ba4f09375ae9e6981d0ae5a4ebe42b8497d0415f54c1f7",  # 请替换为您的实际API密钥
        "start": (page - 1) * 10
    }
    search = GoogleSearch(params)
    results = search.get_dict()
    return [link['link'] for link in results['organic_results']]

def download_image(img_url, images_folder):
    """ 下载图片并返回文件名 """
    try:
        response = requests.get(img_url, stream=True)
        if response.status_code == 200:
            local_filename = unquote(urlparse(img_url).path.split('/')[-1])
            local_path = os.path.join(images_folder, local_filename)
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(8192):
                    f.write(chunk)
            return local_filename
    except Exception as e:
        print(f"Error downloading {img_url}: {e}")
    return None

def process_url_to_markdown(url, blogs_folder, images_folder):
    """ 处理单个URL并将内容保存到Markdown文件 """
    try:
        response = requests.get(url, timeout=10)
    except requests.exceptions.RequestException as e:
        print(f"Request Error for URL {url}: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')

    base_filename = f"{urlparse(url).netloc.replace('.', '_')}_{urlparse(url).path.replace('/', '_')}"
    base_filename = base_filename.replace(':', '').replace('?', '').replace('&', '').replace('%', '')
    markdown_filename = f"{base_filename}.md"
    markdown_path = os.path.join(blogs_folder, markdown_filename)
    
    with open(markdown_path, 'w', encoding='utf-8') as md_file:
        if soup.title:
            md_file.write(f"# {soup.title.string}\n\n")
        for p in soup.find_all('p'):
            md_file.write(f"{p.get_text()}\n\n")
        for img in soup.find_all('img'):
            img_src = img.get('src') or img.get('data-src')
            if img_src and img_src.startswith('http'):
                image_filename = download_image(img_src, images_folder)
                if image_filename:
                    md_file.write(f"![{image_filename}](./images/{image_filename})\n\n")

def load_processed_urls(filename):
    """ 从文件中加载已处理的URL集合 """
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            return set(file.read().splitlines())
    return set()

def save_processed_url(filename, url):
    """ 将新处理的URL追加到文件中 """
    with open(filename, 'a') as file:
        file.write(url + '\n')

# 主程序
topics_file = 'topics.txt'
topics = load_topics(topics_file)

for topic in topics:
    # 获取当前时间
    current_time = datetime.now().strftime("%Y%m%d_%H%M%S")

    # 为每个主题创建文件夹及子文件夹
    topic_folder = topic
    blogs_folder = os.path.join(topic_folder, f'blogs_{current_time}')
    images_folder = os.path.join(topic_folder, 'images')
    os.makedirs(blogs_folder, exist_ok=True)
    os.makedirs(images_folder, exist_ok=True)

    processed_urls_file = os.path.join(topic_folder, f'processed_urls_{topic}.txt')
    processed_urls = load_processed_urls(processed_urls_file)

    # 对每一个网页进行处理
    for page in range(1, 100):  # 设定为处理前两页
        urls = get_urls_for_page(topic, page)
        for url in urls:
            if url not in processed_urls:
                process_url_to_markdown(url, blogs_folder, images_folder)
                processed_urls.add(url)
                save_processed_url(processed_urls_file, url)

    print(f"主题 '{topic}' 的内容已保存在 '{topic_folder}' 文件夹下的 '{blogs_folder}' 中。")
