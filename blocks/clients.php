<section class="clients">
    <div class="container-min">
        <p class="text-center">Weve helped over 600 clients achieve</p>
        <img src="images/clients bg.png" alt="clients" class="w-100">
        <div class="row justify-content-center justify-content-lg-between gap-3">
            <?php for($i = 0; $i < 5; $i++): ?>
                <div class="bg-img d-flex">
                    <img src="images/clients <?php echo $i ?>.jpg" alt="client" class="m-auto">
                </div>
            <?php endfor; ?>
        </div>
    </div>  
</section>