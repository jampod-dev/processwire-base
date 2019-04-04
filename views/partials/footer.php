			</main><!--/main-->

		</div><!--/container-->

	</div><!--/content-->

	<script type="text/javascript" src="<?php echo $config->urls->templates?>js/jquery-3.2.1.min.js"></script>
    <?php if ($config->environment == 'production') : ?>
	   <script type="text/javascript" src="<?php echo $config->urls->templates?>js/main.min.js"></script>
    <?php else : ?>
        <script type="text/javascript" src="<?php echo $config->urls->templates?>js/main.min.js?v=<?= time() ?>"></script>
    <?php endif; ?>

</body>
</html>
