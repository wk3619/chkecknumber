var str = "";
var s = "";
(init())

function init() {
	init_btns()
	console.log(str);

	init_array()
	init_show()
}

function init_show() {
	$("#show3").val(str);
}

function init_array() {

	for (var i = 0; i < 99; i++) {
		str += i + 1 + ' '
	};
	console.log(str);
}

function init_btns() {

	$('#btn').click(function() {

		check_tail()
		check_and()
		check_and_tail()
	})

	$('#and_btn').click(function() {
		var andresult = 0;
		$("[name='and']:checked").each(function() {

			andresult += parseInt($(this).val());

		})
		andresult = andresult > 10 ? andresult - 10 : andresult;
		console.log(andresult);
		s += andresult + " ";
		console.log(s);
	})

}

function remove() {
		if (str.indexOf(s)) {

		}
	}
	//返回尾数集合
function check_tail() {
		var tail_str = "";
		$("[name='tail']:checked").each(function() {

			for (var i = 0; i <= 9; i++) {
				tail_str += i * 10 + parseInt($(this).val()) + " ";
			};


		})
		console.log("tail_str " + tail_str);
		return tail_str;
	}
	//返回和值集合
function check_and() {
		var and_str = 0;
		$("[name='and']:checked").each(function() {

			and_str += parseInt($(this).val());

		})
		and_str = and_str > 10 ? and_str - 10 : and_str;
		console.log("and_str " + and_str);
		return and_str;
	}
	//和尾集合

function check_and_tail() {
	var andtail_str = "";
	var x = 0;
	var y = 0;

	$("[name='and_tail']:checked").each(function() {

		var s = parseInt($(this).val());
		console.log(s);
		for (x = 0; x < 10; x++) {
			for (y = 0; y < 10; y++) {
				if (x + y == s || x + y == parseInt(10 + s)) {
					console.log(10 * x + y);
					console.log(10 * y + x);

					if (andtail_str.indexOf(10 * x + y) == -1) {

						console.log(x + " " + y);
						andtail_str += 10 * x + y + " ";
					};
					if (!andtail_str.indexOf(10 * y + x) == -1) {
						console.log(x + " " + y);
						andtail_str += 10 * y + x + " ";
					};

				};
			};
		};
		//and_str += parseInt($(this).val());
		console.log(andtail_str);

	})


}