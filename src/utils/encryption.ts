
/**
 * 判断是否是中文字符
 * @param char 需要判断的字符
 * @returns 是中文字符返回 true，否则返回 false
 */
const isChinese = (char: string): boolean => {
  return /[\u4e00-\u9fa5]/.test(char); // Unicode 范围内的汉字字符
};
/**
 * 加密函数：对输入文本中的每个字符进行 Unicode 偏移
 * @param text 原始文本
 * @param shift 偏移量（加密密钥）
 * @returns 加密后的文本
 */
export const encrypt = (text: string, shift: number = 2): string => {
  return Array.from(text)
    .map(char => isChinese(char) ? String.fromCharCode(char.charCodeAt(0) + shift) : char)
    .join('');
};

/**
 * 解密函数：对加密文本中的每个字符进行反向 Unicode 偏移
 * @param text 加密后的文本
 * @param shift 偏移量（加密密钥，与加密保持一致）
 * @returns 解密后的文本
 */
export const decrypt = (text: string, shift: number = 1): string => {
  return Array.from(text)
    .map(char => isChinese(char) ? String.fromCharCode(char.charCodeAt(0) - shift) : char)
    .join('');
};
