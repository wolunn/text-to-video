import os
from transformers import pipeline, set_seed

# 设置随机种子（可选）
set_seed(42)

# 初始化GPT模型
# gpt_model = pipeline("text-generation", model="gpt2", device=0)  # 使用GPU device=0，没有GPU则使用CPU
gpt_model = pipeline("text-generation", model="gpt2", device='cpu')

# 处理单个Markdown文件
def process_markdown_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()

        # 分割段落
        paragraphs = content.split('\n\n')
        processed_paragraphs = []

        for paragraph in paragraphs:
            # 通过GPT模型优化段落
            if paragraph.strip():
                generated = gpt_model(paragraph, max_length=50, num_return_sequences=1)
                processed_paragraph = generated[0]['generated_text']
                processed_paragraphs.append(processed_paragraph)
            else:
                processed_paragraphs.append(paragraph)

        # 重组Markdown内容
        processed_content = '\n\n'.join(processed_paragraphs)
        return processed_content

    except Exception as e:
        print(f"Error processing file {file_path}: {e}")
        return None

# 保存优化后的Markdown文件
def save_processed_file(original_path, processed_content):
    if processed_content:
        new_file_path = original_path.replace('.md', '_processed.md')
        with open(new_file_path, 'w', encoding='utf-8') as file:
            file.write(processed_content)
        print(f"Processed file saved as {new_file_path}")

# 主函数
def main():
    # 文件夹路径
    base_folder_path = 'text to video'

    for root, dirs, files in os.walk(base_folder_path):
        for file_name in files:
            if file_name.endswith('.md'):
                file_path = os.path.join(root, file_name)
                print(f"Processing {file_path}...")
                processed_content = process_markdown_file(file_path)
                save_processed_file(file_path, processed_content)

if __name__ == "__main__":
    main()
