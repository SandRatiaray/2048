function Background(cell) {
	var value = $(cell).html();
	switch (value) {
		case "2":
			$(cell).addClass("val2");
			break;
		case "4":
			$(cell).addClass('val4');
			break;
		case "8":
			$(cell).addClass('val8');
			break;
		case "16":
			$(cell).addClass('val16');
			break;
		case "32":
			$(cell).addClass('val32');
			break;
		case "64":
			$(cell).addClass('val64');
			break;
		case "128":
			$(cell).addClass('val128');
			break;
		case "256":
			$(cell).addClass('val256');
			break;
		case "512":
			$(cell).addClass('val512');
			break;
		case "1024":
			$(cell).addClass('val1024');
			break;
		case "2048":
			$(cell).addClass('val2048');
			break;
		default:
			$(cell).addClass("occupied");
	}
}