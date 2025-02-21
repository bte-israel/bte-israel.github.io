var copy_text_val = document.querySelector('.copy_text');

function Copy() {
  copy_text_val.select();
  document.execCommand("copy");
  console.log(copy_text_val.value);
} 