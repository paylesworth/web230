<!DOCTYPE html>
<html lang="en">
<!-- 
	Display the POST and GET data sent by a form

	Author:  Phil Aylesworth
	Date:    2017-03-23
	Updated: 2018-01-10
-->
<head>
	<meta charset="utf-8"/>
	<title>Submitted Form Values</title>
	<style>
		body {
			font-family: Helvetica, Arial, sans-serif;
			box-sizing: border-box;
			max-width: 800px;
			margin: 0 auto;
			padding: 0;
		}
		h1 {
			text-align: center;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			border: 2px solid #555;
		}
		td,th {
			border: 1px solid #555;
			padding: 4px;
		}
		th {
			background-color: #555;
			color: white;
			text-align: left;
			border-color: white;
		}
		th:first-of-type {
			width: 25%;
		}
		.warn {
			color: red;
			text-align: center;
		}
	
	</style>
</head>
<body>
	<h1>Submitted Form Values</h1>
	<?php
		// The value might be an array of items. (IE checkboxes)
		// If it is convert to a string.
		// May as well trim and sanitize while we are at it.
		function valueToString($arr) {
			if(is_array($arr)) {
				$new_value = '';
				foreach ($arr as $v) {
					$new_value .= trim($v) . ', ';
				}
				$new_value = substr($new_value, 0, -2);
			} else {
				$new_value = trim($arr);
			}
			return htmlspecialchars($new_value, ENT_HTML5);
		}
		
		if(count($_POST) == 0 && count($_GET) == 0) {
			echo '<h2 class="warn">No data sent.</h2>';
		}
		
		if(count($_POST) > 0) {
			echo '<h2>POST Values</h2><table> <thead><tr><th>Name</th> <th>Value</th> </tr> </thead> <tbody> ';
			foreach ($_POST as $key => $value) {
				echo '<tr><td>' . $key . '</td><td>'. valueToString($value) . '</td></tr>';
			}
			echo '</tbody></table>';
		}
		
		if(count($_GET) > 0) {
			echo '<h2>GET Values</h2><table> <thead> <tr> <th>Name</th> <th>Value</th> </tr> </thead> <tbody> ';
			foreach ($_GET as $key => $value) {
				echo '<tr><td>' . $key . '</td><td>'. valueToString($value) . '</td></tr>';
			}
			echo '</tbody></table>';
		}
	?>

</body>
</html>