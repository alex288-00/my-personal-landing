<?php
$path_to_image= '../media/checkmark.png';


$fio = $_POST['fio'];
$phone = $_POST['phone'];
$auto = $_POST['auto'];
$year = $_POST['year'];
$massage = $_POST['massage'];
$details = $_POST['details'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$auto = htmlspecialchars($auto);
$year = htmlspecialchars($year);
$massage = htmlspecialchars($massage);
$details = htmlspecialchars($details);
$fio = urldecode($fio);
$email = urldecode($email);
$auto = urldecode($auto);
$year = urldecode($year);
$massage = urldecode($massage);
$details = urldecode($details);
$fio = trim($fio);
$email = trim($email);
$auto = trim($auto);
$year = trim($year);
$massage = trim($massage);
$details = trim($details);

/*функция для создания запроса на сервер Telegram */
function parser($url){
  $curl = curl_init();
  curl_setopt($curl, CURLOPT_URL, $url);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  $result = curl_exec($curl);
  if($result == false){     
    echo "Ошибка отправки запроса: " . curl_error($curl);
    return false;
  }
  else{
    return true;
  }
}


$email_body .= "Заполнена форма \"Задать вопрос\" <br/>".
"Данные отправителя<br/>Имя: $fio <br>".
"Почта: $email <br>".
// "Авто: $auto <br>".
// "Год: $year <br>".
"Сообщение: $massage <br>".
// "Номера деталей: $details";

$body .= "<b>Заявка с сайта</b> \n";
$body .= "Имя: " .$fio. "\n";
$body .= "Почта: " .$email. "\n";
// $body .= "Авто: " .$auto. "\n";
// $body .= "Год: " .$year. "\n";
$body .= "Сообщение: " .$massage. "\n";
// $body .= "Номера деталей: " .$details. "\n";
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: mail@asmirnov.su \r\n";
$body = urlencode($body);

/*токен который выдаётся при регистрации бота */
$token = "5312628417:AAGcQKDDGMpbYedpNcXiJiBla8BQ5FyXG14";
/*идентификатор группы*/
$chat_id = "-638129194";

if (parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$body}") && mail("alex288.00@mail.ru", "Заявка с сайта", $email_body , $headers))
 {     echo '<p style="font-size: 30px; text-align: center;margin-top: 50px;">Спасибо, заявка успешно отправлена</p>';
  echo '<p style="font-size: 18px; text-align: center;margin-top: 20px;">Скоро я свяжусь с вами</p>';
  echo '<img style="
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
" src="', $path_to_image, '">';
echo '<a style="display: flex;justify-content: center;align-items: center;font-size: 18px;margin: 0 auto;margin-top: 30px;height: 30px;width: 219px;background: #1E87F0;text-decoration: none;color: #fff;padding: 10px;border-radius: 3px;" href="https://asmirnov.su/">Вернуться назад</a>';
      
} else {
    echo "при отправке сообщения возникли ошибки";
}


// parser("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$body}");


// if (mail("alex288.00@mail.ru", "Заявка с сайта", $email_body , $headers))
//  {     echo '<p style="font-size: 30px; text-align: center;margin-top: 50px;">Заявка успешно отправлена</p>';
//   echo '<p style="font-size: 18px; text-align: center;margin-top: 20px;">В ближайшее время мы свяжемся с вами</p>';
//   echo '<img style="
//   width: 200px;
//   height: 200px;
//   margin: 0 auto;
//   display: flex;
// " src="', $path_to_image, '">';
// echo '<a style="display: flex;justify-content: center;align-items: center;font-size: 18px;margin: 0 auto;margin-top: 30px;height: 30px;width: 219px;background: #1E87F0;text-decoration: none;color: #fff;padding: 10px;border-radius: 3px;" href="#">Вернуться на главную</a>';
      
// } else {
//     echo "при отправке сообщения возникли ошибки";
// }

?>




