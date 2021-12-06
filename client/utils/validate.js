export const nicknameValidator = (str) => {
  const trimmed = str.trim();
  if (!trimmed.length || trimmed.length < 2) {
    return [false, '두 글자 이상을 입력해주세요.'];
  }
  if (trimmed.length > 10) {
    return [false, '10글자 이하로 입력해주세요.'];
  }
  return [true, '유효한 닉네임입니다.'];
};