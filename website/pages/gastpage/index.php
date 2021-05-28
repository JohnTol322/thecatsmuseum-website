<?php include "../../php-includes/html-head.php" ?>
<title>TheCatsMuseum | | Gasten</title>
<?php include "../../php-includes/header.php" ?>
<main id="gast-main">
    <div class="page-box">
    
        <img src="../../images/<?php echo  $_GET["gast"]?>.jpg" alt="Image" class="gast-page-img">
        <p id="<?php echo $_GET["gast"]?>-text" class="gast-text"></p>
    </div>
</main>

<?php include "../../php-includes/footer.php" ?>
