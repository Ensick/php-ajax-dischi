
<?php

    include __DIR__.'/../../database.php';

    header('Content-type: application/jason');

    echo json_encode( $database );

?>