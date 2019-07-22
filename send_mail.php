
<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email_address'];
  $message = $_POST['message'];
  function filter_email_header($form_field) {
    return preg_replace('/[\0\n\r\|\!\/\<\>\^\$\%\*\&]+/','',$form_field);
    }  
    $visitor_email = filter_email_header($visitor_email);
    $headers = "From: $visitor_email\n";
    $sent = mail('marykathryn90@yahoo.com', 'Feedback Form Submission', $message, $headers);
    if ($sent) {
    
    ?><html>
    <head>
    <title>Thank You</title>
    </head>
    <body>
    <h1>Thank You</h1>
    <p>Thank you for your feedback.</p>
    </body>
    </html>
    <?php
    
    } else {
    
    ?><html>
    <head>
    <title>Somthing went wrong</title>
    </head>
    <body>
    <h1>Somthing went wrong</h1>
    <p>We could not send your feedback. Please try again.</p>
    </body>
    </html>
    <?php
    }
    ?>

