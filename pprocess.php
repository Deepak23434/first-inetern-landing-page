<?php 

require_once('DBcontroller.php');

$dbcon = new DBcontroller();

date_default_timezone_set('Asia/Kolkata');
$dt = new DateTime();





if(isset($_POST['pay'])){
	
	$cname = strip_tags( trim($_POST['cname']));
	$cemail = strip_tags( trim($_POST['cemail']));
	$cmob = strip_tags( trim($_POST['cmob']));
	$course =  implode(',', $_POST['courses']); 
	$pay = strip_tags( trim($_POST['pay']));

	
	//echo $pay;
		
	$to = 'helpdesk@121techtraining.in';
	$subject = "query from all offer";
	$message = "Name : ".$cname."<br>Email : ".$cemail."<br>Mobile : ".$cmob."<br>Courses : ".$course."<br>Payment : ".$pay."<br>Time : ".$dt->format('Y-m-d H:i:s');
	
	// Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: <'.$cemail.'>' . "\r\n";
    //$headers .= 'Cc: myboss@example.com' . "\r\n";
	
	//mail($to,$subject,$message,$headers);
	
	if(mail($to,$subject,$message,$headers)){
	    	if($pay == 'payu'){
		
        		header("Location: https://www.payumoney.com/paybypayumoney/#/D945CC81455707CDD0DEA03630F029A9");
        	}
        	
        	if($pay == 'paytm'){
        		
        		header("Location: http://121techtraining.in/paytm/TxnTest.php");
        	}
	}
	
}




if(isset($_POST['dmname'])){
	
	
	$name =  strip_tags( trim($_POST['dmname']));
	$phone =  strip_tags( trim($_POST['dmphone']));
	$email =  strip_tags( trim($_POST['dmemail']));
	$callat =  strip_tags( trim($_POST['conDemo']));
	$dmmode =  strip_tags( trim($_POST['dmmode']));
	$dmcourse =  strip_tags( trim($_POST['dmcourse']));
	$datet = $_POST['dmtime'];
	$demo_m = $_POST['cval1'];
		
	$to = $email;
	$subject = "Registered on 121techtraining all offers";
	//$message = "You have registered on 121tech training.";
	
	$message = "Dear ".$name.",<br>Thank you for showing interest in course our team will contact you shortly & assist you further"."<br><br>Your Details<br>Name : ".$name."<br>Email : ".$email."<br>Mobile : ".$phone."<br>Courses : ".$dmcourse."<br>Mode : ".$dmmode. "<br><br><br><br><br>Thanks & Regards <br>121techtraining team";
	//"<br>Time : ".$datet->format('Y-m-d H:i:s').
	// Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: <helpdesk@121techtraining.in>' . "\r\n";
    $headers .= 'Bcc: helpdesk@121techtraining.in' . "\r\n";
    
  		
	
	$query = "INSERT INTO land_page_dm (name, mobile, email, con_t, t_mode, d_time, d_mode, offer) VALUES ('".$name."', '".$phone."', '".$email."', '".$callat."','".$dmmode."', '".$datet."', '".$demo_m."','Diwali offer')";
	$result = $dbcon->execute($query);
	
	if($result){
	    
	    if(mail($to,$subject,$message,$headers)){
		echo 'inserted!';
	    }
	}
    
}


if(isset($_POST['popname'])){
	
	$pname = strip_tags( trim($_POST['popname']));
	$pemail = strip_tags( trim($_POST['popemail']));
	$pmob = strip_tags( trim($_POST['popphone']));
	$pourse =  implode(',', $_POST['pcourses']); 
	

	
	//echo $pay;
		
	$to = 'helpdesk@121techtraining.in';
	$subject = "future offer query";
	$message = "Name : ".$pname."<br>Email : ".$pemail."<br>Mobile : ".$pmob."<br>Courses : ".$pourse."<br>Time : ".$dt->format('Y-m-d H:i:s');
	
	// Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From:<'.$pemail.'>' . "\r\n";
    //$headers .= 'Cc: myboss@example.com' . "\r\n";
	
	//mail($to,$subject,$message,$headers);
	
	if(mail($to,$subject,$message,$headers)){
	    echo 'sent!';
	}
	
	
}




?>

