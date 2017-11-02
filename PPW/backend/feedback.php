<?php

header("Cache-Control: no-store, no-cache, must-revalidate");
header("Content-type: application/json");



require_once '../vendor/autoload.php';

require_once 'config/db.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



$answer = ['success' => true];
$err = [];



$phone = isset($_POST['phone']) ? addslashes(trim($_POST['phone'])) : null;
$email = isset($_POST['email']) ? addslashes(trim($_POST['email'])) : null;
$comment = isset($_POST['comment']) ? addslashes(trim($_POST['comment'])) : null;



function validate($phone, $email, &$err)
{
	if ($phone)
	{

	}
	else
	{
		$err['phone'] = 'Введите номер телефона';
	}

	if ($email)
	{

	}
	else
	{
		$err['email'] = 'Введите email';
	}

	return true;
}

if (validate($phone, $email))
{
	try {
		$dbh = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASS);

		$is_exec = $dbh->exec("
			INSERT INTO `feedback` (
				date,
				phone,
				email,
				comment,
				alert_success,
				alert_date
			)
				VALUES (
				now(),
				'$phone',
				'$email',
				".($comment ? "'$comment'" : 'null').",
				0,
				now()
			)
		");

		$feedback_id = $is_exec ? $dbh->lastInsertId() : null;

		if ($feedback_id)
		{
			$mail = new PHPMailer(true);										// Passing `true` enables exceptions

			try {
				//Server settings
				$mail->SMTPDebug = 2;											// Enable verbose debug output
				$mail->isSMTP();												// Set mailer to use SMTP
				$mail->Host = 'smtp.gmail.com';									// Specify main and backup SMTP servers
				$mail->SMTPAuth = true;											// Enable SMTP authentication
				$mail->Username = 'dev.powercode@gmail.com';					// SMTP username
				$mail->Password = '_test123_';									// SMTP password
				$mail->SMTPSecure = 'tsl';										// Enable TLS encryption, `ssl` also accepted
				$mail->Port = 587;												// TCP port to connect to

				//Recipients
				$mail->setFrom('dev.powercode@gmail.com', 'setFrom');
				$mail->addAddress('dev.powercode@gmail.com', 'addAddress');		// Add a recipient
				$mail->addReplyTo('dev.powercode@gmail.com', 'addReplyTo');

				//Content
				$mail->isHTML(true);											// Set email format to HTML
				$mail->Subject = 'Here is the subject';

				$mail->Body    = "
					<p><b>Время:</b> ".date('d.m.Y H:i')."</p>
					<p><b>Телефон:</b> $phone</p>
					<p><b>E-mail:</b> $email</p>
					<p><b>Сообщение:</b> ".($comment ? $comment : 'отсутсвует')."</p>
				";

// 				$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

				$mail->send();

				$dbh->exec("
					UPDATE `feedback`
					SET
						alert_success = 1,
						alert_date = now()
					WHERE
						id = $feedback_id
				");
			} catch (Exception $e) {}
		}
	}
	catch (Exception $e) {
		$err['fatall'] = 'Ошибка сохранения сообщения';
	}
}
else
{

}



if (count($err))
{
	$answer['success'] = false;
	$answer['err'] = &$err;
}



echo json_encode($answer);


