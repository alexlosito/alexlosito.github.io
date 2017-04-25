$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks)
			$('#difficulty').append(data.blocks)
			$('#protocolversion').append(data.blocks)
			$('#connections').append(data.blocks)
			$('#timeoffset').append(data.blocks)
			
		},

		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			$('#difficulty').append(err+" N/A");
			$('#protocolversion').append(err+" N/A");
			$('#connections').append(err+" N/A");
			$('#timeoffset').append(err+" N/A");			
		}
	});
});
