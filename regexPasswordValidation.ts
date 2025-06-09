// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/typescript

/**
 * 驗證使用者密碼的正規表示式。
 *
 * 此正規表示式的目標是驗證密碼是否符合下列條件：
 *
 * - 至少 6 個字元
 * - 至少包含一個大寫字母（A-Z）
 * - 至少包含一個小寫字母（a-z）
 * - 至少包含一個數字（0-9）
 * - 僅包含英數字元(alphanumeric characters)
 *
 * 範例：
 * ```ts
 * REGEXP.test("Abcdef1") // true
 * REGEXP.test("abc123!")   // false
 * ```
 */

export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[^\da-zA-Z]).{6,}$/;

// codewars裡面不錯的解答
// export const REGEXP = new RegExp(
//   '(?=.*[a-z].*)'    // Contains lowercase letter
//   + '(?=.*[A-Z].*)'  // Contains uppercase letter
//   + '(?=.*\\d.*)'     // Contains digit
//   + '^[a-zA-Z0-9]{6,}$' // 6 or more alphanumeric characters, and nothing else.
// );