
document.getElementById('btn').addEventListener('click', function() {
  const birthDay = document.getElementById('birthday').value;
  if (birthDay) {
    const birthDate = new Date(birthDay);
    const today = new Date;

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthBetween = today.getMonth() - birthDate.getMonth();
    if (monthBetween < 0 || (monthBetween === 0 && today.getDate() < birthDate.Date())) {
      age--;
    }
    document.getElementById('result').textContent = 'Your age is:' + age;
  } else {
    document.getElementById('result').textContent = 'Please enter your birthday'
  }
});