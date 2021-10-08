<html>
	<head>
		<meta name="viewport" content="width=device-width"/>
		<title>Satvik Sharma LED Architecture</title>
		</head>
	<style>
		body{
		background-color:rgb(212,250,252);
		font-family:'Arial';
		}
		
		.red{
		background-color:red;
		width:10em;
		height:4em;
		font-size:20px;
		}
		
		.yellow{
		background-color:yellow;
		width:10em;
		height:4em;
		font-size:20px;
		}
		
		.green{
		background-color:green;
		width:10em;
		height:4em;
		font-size:20px;
		}
	</style>
	<body>
		<center>
			<h1>
				SIT314 final Project Satvik Sharma
			</h1>
			<form method="get" action=index.php>
				<input class="red" type="submit" value="Turn red LED on" name="ron">
				<input class="red" type="submit" value="Turn red LED off" name="roff">
				<br/><br/>
			</form>
		</center>
		<?php
			shell_exec("gpio -g mode 17 out");
			
			if(isset($_GET['roff']))
			{
				shell_exec("gpio -g write 17 LOW");
			}
			else if(isset($_GET['ron']))
			{
				shell_exec("gpio -g write 17 HIGH");
			}
		?>
	</body>
</html>
