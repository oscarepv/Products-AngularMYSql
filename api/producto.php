<?php 
	header('Access-Control-Allow-Origin: *');
	include  'funciones.php';

	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
			$sql = "SELECT * FROM productos ORDER BY pro_descripcion";
			echo getSQL($sql);
			break;

		case '2':
			$id = $_GET["id"];
			$sql = "SELECT * FROM productos WHERE idproducto = $id";
			echo getSQL($sql);
			break;

		case '3':
			$pro_descripcion = utf8_decode($_POST["pro_descripcion"]);
			$pro_unidad = $_POST["pro_cantidad"];
			$pro_marca = $_POST["pro_categoria"];
			$pro_observaciones = utf8_decode($_POST["pro_observaciones"]);
			$pro_pventa = $_POST["pro_pventa"];
			
			$sql = "INSERT INTO productos VALUES(null, '$pro_descripcion', $pro_unidad, '$pro_marca', '$pro_pventa', '$pro_observaciones', NOW(), null)";
			
			echo putSQL($sql);
			//echo $sql;
			break;

		case '4':
			$idsel = $_POST["idsel"];
			$pro_descripcion = strtolower(utf8_decode($_POST["pro_descripcion"]));
			$pro_unidad = $_POST["pro_cantidad"];
			$pro_marca = $_POST["pro_categoria"];
			$pro_observaciones = utf8_decode($_POST["pro_observaciones"]);
			$pro_pventa = $_POST["pro_pventa"];

			
				$sql = "UPDATE productos SET pro_descripcion = '$pro_descripcion', pro_cantidad = '$pro_unidad', pro_categoria = '$pro_marca', pro_observaciones = '$pro_observaciones',  pro_pventa = $pro_pventa, modificacion = NOW() WHERE idproducto = $idsel";
			
			//echo $sql;
			echo putSQL($sql);
			break;

		case '5':
			$idsel = $_GET["id"];
			$sql = "UPDATE productos SET vigencia = 0, modificacion = NOW() WHERE idproducto = $idsel";
			//echo $sql;
			echo putSQL($sql);
			break;

		default:
			# code...
			break;
	}
?>