var home_players_detailView = '';
var away_players_detailView = '';
var batting_Team = '';
var max_ovrs = '';
var max_bowl_ovrs = '2';
var ovrs = '';
var balls = '';
var matchStartUP = true;
var isCorrectBall = true;
var isMaidenOver = true;
var extraDelivery = 0;
var prevOverBowler = '';

$(document).ready(function() {
	$("#second_page").hide();
	$("#third_page").hide();
	$("#fifth_page").hide();
});

/* Adding or Editing Player's Team Details */
function edit_players() {
	$("#first_page").hide();
	$("#third_page").hide();
	$("#second_page").show();	
}

/* Adding or Editing Player's Team Details for Home side */
function home() {
	$("#choose_Team").hide();
	$("#home_team_details").show();

	/*$("#home_Name").text($("#hpTName").val());
	$("#hp1").val($("#hp1Name").val());
	$("#hp2").val($("#hp2Name").val());
	$("#hp3").val($("#hp3Name").val());
	$("#hp4").val($("#hp4Name").val());
	$("#hp5").val($("#hp5Name").val());
	$("#hp6").val($("#hp6Name").val());
	$("#hp7").val($("#hp7Name").val());
	$("#hp8").val($("#hp8Name").val());
	$("#hp9").val($("#hp9Name").val());
	$("#hp10").val($("#hp10Name").val());
	$("#hp11").val($("#hp11Name").val());*/

	var team_name = prompt("Please enter your Home Team Name","Home Team");

	if (team_name != '' && team_name!=null)
		$("#home_Name").text(team_name);
	else
		$("#home_Name").text("Home Team");
}

/* Adding or Editing Player's Team Details for Away side */
function away() {
	$("#choose_Team").hide();
	$("#away_team_details").show();

	/*$("#away_Name").text($("#apTName").val());
	$("#ap1").val($("#ap1Name").val());
	$("#ap2").val($("#ap2Name").val());
	$("#ap3").val($("#ap3Name").val());
	$("#ap4").val($("#ap4Name").val());
	$("#ap5").val($("#ap5Name").val());
	$("#ap6").val($("#ap6Name").val());
	$("#ap7").val($("#ap7Name").val());
	$("#ap8").val($("#ap8Name").val());
	$("#ap9").val($("#ap9Name").val());
	$("#ap10").val($("#ap10Name").val());
	$("#ap11").val($("#ap11Name").val());*/

	var team_name = prompt("Please enter your Away Team Name","Away Team");
	
	if (team_name != '' && team_name!=null)
		$("#away_Name").text(team_name);
	else
		$("#away_Name").text("Away Team");
}

/* Saving Team Details for both Teams */
function save(particularDiv) {
	$("#"+particularDiv).hide();

	if(particularDiv == "home_team_details") {
		$("#hpTName").val($("#home_Name").text());
		$("#hp1Name").val($("#hp1").val());
		$("#hp2Name").val($("#hp2").val());
		$("#hp3Name").val($("#hp3").val());
		$("#hp4Name").val($("#hp4").val());
		$("#hp5Name").val($("#hp5").val());
		$("#hp6Name").val($("#hp6").val());
		$("#hp7Name").val($("#hp7").val());
		$("#hp8Name").val($("#hp8").val());
		$("#hp9Name").val($("#hp9").val());
		$("#hp10Name").val($("#hp10").val());
		$("#hp11Name").val($("#hp11").val());

		away();
	}
	else if(particularDiv == "away_team_details") {
		$("#apTName").val($("#away_Name").text());
		$("#ap1Name").val($("#ap1").val());
		$("#ap2Name").val($("#ap2").val());
		$("#ap3Name").val($("#ap3").val());
		$("#ap4Name").val($("#ap4").val());
		$("#ap5Name").val($("#ap5").val());
		$("#ap6Name").val($("#ap6").val());
		$("#ap7Name").val($("#ap7").val());
		$("#ap8Name").val($("#ap8").val());
		$("#ap9Name").val($("#ap9").val());
		$("#ap10Name").val($("#ap10").val());
		$("#ap11Name").val($("#ap11").val());

		$('#choose_Team').show();
	}
}

/* Previous Screen */
function back() {
	if($("#second_page").is(":visible")) {
		$("#second_page").hide();
		$("#first_page").show();
	}
	else if($("#fifth_page").is(":visible")) {
		$("#fifth_page").hide();
		$("#first_page").show();
	}
}

/* Starting the match with Details of Players obtained from Manage Teams */
function start_match() {
	$("#first_page").hide();
	$("#second_page").hide();
	
	gatheringTeamDetails();

	max_ovrs = prompt("Please enter the maximum overs: ","8");
	if(max_ovrs == null)
		max_ovrs = 8;
	
	document.getElementById("third_page").innerHTML += "<div id='home_players_Det' style='display:none;'><b>Choose a Player</b><br>"+home_players_detailView+"</div>";
	document.getElementById("third_page").innerHTML += "<div id='away_players_Det' style='display:none;'><b>Choose a Player</b><br>"+away_players_detailView+"</div>";

	if (confirm('Is home team gonna bat first?')) {
		batting_Team = "hpTName";
		batting_Team_Name = $("#hpTName").val();
		bowling_Team_Name = $("#apTName").val();
	}
	else {
		batting_Team = "apTName";
		batting_Team_Name = $("#apTName").val();
		bowling_Team_Name = $("#hpTName").val();
	}

	document.getElementById("whoBats").innerHTML = batting_Team_Name;
	document.getElementById("max_Overs").innerHTML = max_ovrs;
	document.getElementById("whoBowls").innerHTML = bowling_Team_Name;
	$("#scoreboard table:first").attr("id", batting_Team);
	
	$("#third_page").show();
	
	if( batting_Team == "hpTName") {
		$("#scoreboard").hide();
		$("#eachBallUpdate").hide();
		$("#home_players_Det").show();
	}

	else if( batting_Team == "apTName") {
		$("#scoreboard").hide();
		$("#eachBallUpdate").hide();
		$("#away_players_Det").show();
	}
}

function gatheringTeamDetails() {
	home_players_detailView = "<div onclick='appending(this)'>"+$("#hp1Name").val()+"</div><div onclick='appending(this)'>"+$("#hp2Name").val()+"</div><div onclick='appending(this)'>"+$("#hp3Name").val()+"</div>";
	home_players_detailView += "<div onclick='appending(this)'>"+$("#hp4Name").val()+"</div><div onclick='appending(this)'>"+$("#hp5Name").val()+"</div><div onclick='appending(this)'>"+$("#hp6Name").val()+"</div>";
	home_players_detailView += "<div onclick='appending(this)'>"+$("#hp7Name").val()+"</div><div onclick='appending(this)'>"+$("#hp8Name").val()+"</div><div onclick='appending(this)'>"+$("#hp9Name").val()+"</div>";
	home_players_detailView += "<div onclick='appending(this)'>"+$("#hp10Name").val()+"</div><div onclick='appending(this)'>"+$("#hp11Name").val()+"</div>";

	away_players_detailView = "<div onclick='appending(this)'>"+$("#ap1Name").val()+"</div><div onclick='appending(this)'>"+$("#ap2Name").val()+"</div><div onclick='appending(this)'>"+$("#ap3Name").val()+"</div>";
	away_players_detailView += "<div onclick='appending(this)'>"+$("#ap4Name").val()+"</div><div onclick='appending(this)'>"+$("#ap5Name").val()+"</div><div onclick='appending(this)'>"+$("#ap6Name").val()+"</div>";
	away_players_detailView += "<div onclick='appending(this)'>"+$("#ap7Name").val()+"</div><div onclick='appending(this)'>"+$("#ap8Name").val()+"</div><div onclick='appending(this)'>"+$("#ap9Name").val()+"</div>";
	away_players_detailView += "<div onclick='appending(this)'>"+$("#ap10Name").val()+"</div><div onclick='appending(this)'>"+$("#ap11Name").val()+"</div>";
}

/* Adding Selected Players to Scoreboard */
function appending(currentSelectedPlayer) {
	var parentID = $("#"+currentSelectedPlayer.parentNode.id).attr("id");
	$("#"+parentID).hide();

	var content = '';

	if( batting_Team == "hpTName") {
		if(parentID == "home_players_Det") {
			content = "<tr class='active'>"+
							"<td class='name'>"+$(currentSelectedPlayer).text()+"</td>"+
							"<td class='dismisal'></td>"+
							"<td class='runs'>0</td>"+
							"<td class='balls'>0</td>"+
							"<td class='fours'>0</td>"+
							"<td class='sixes'>0</td>"+
							"<td class='strike'>0.0</td>"+
						"</tr>";
			if(!matchStartUP) {
				$("table:first tr:last").before(content);
				
				var totOvers = $("table:first #bottom #overs").text().split(".");
				totOvers[0] = parseInt(totOvers[0]);
				totOvers[1] = parseInt(totOvers[1]);

				if(totOvers[0] != max_ovrs) {
					if(totOvers[1] != 0)
						$("table:first tr:last").prev().attr("id", "current");
				}

				$("#scoreboard").show();
				$("#eachBallUpdate").show();
				$(currentSelectedPlayer).remove();
			}
		}
		else if(parentID == "away_players_Det") {
			content = "<tr>"+
							"<td class='name'>"+$(currentSelectedPlayer).text()+"</td>"+
							"<td class='overs'>0.0</td>"+
							"<td class='maidens'>0</td>"+
							"<td class='runs'>0</td>"+
							"<td class='wickets'>0</td>"+
							"<td class='econ'>0</td>"+
						"</tr>";
			if(!matchStartUP) {
				console.log("Not first over");
				var alreadyBowled = false;
				var row_position;
				var selectedBowler = $(currentSelectedPlayer).text();
				console.log("selectedBowler: "+selectedBowler);
				var noBowled = $("table:last tr	").size();

				for(var i=2; i<=noBowled; i++) {
					if(selectedBowler == $("table:last tr:nth-child("+i+") td:first").text()) {
						alreadyBowled = true;
						row_position = i;
						break;
					}	
				}
				
				if(alreadyBowled) {
					if (prevOverBowler != selectedBowler) {
						var ovrs_Bowled = $("table:last tr:nth-child("+row_position+") td:nth-child(2)").text().split(".");
						ovrs_Bowled = parseInt(ovrs_Bowled[0]);

						if(ovrs_Bowled < max_bowl_ovrs) {
							console.log("Row number: "+row_position);
							$("table:last tr:nth-child("+row_position+")").attr('id', 'current');
							$("#scoreboard").show();
							$("#eachBallUpdate").show();
						}
						else {
							$(currentSelectedPlayer).remove();
							console.log("Player removed");
							$("#away_players_Det").show();
						}
					}
					else {
						console.log("Player bowled last over.");
						$("#scoreboard").hide();
						$("#eachBallUpdate").hide();
						$("#away_players_Det").show();
					}
				}
				else {
					console.log("New Bowler");
					$("table:last tr:last").after(content);
					$("#scoreboard table:last tr:last").attr("id", "current");
					$("#scoreboard").show();
					$("#eachBallUpdate").show();
				}

				prevOverBowler = selectedBowler;
			}
		}

		if(matchStartUP) {
			if($('#scoreboard table:first tr').length <3) {
				$("table #bottom:last").before(content);
				$("#home_players_Det").show();
				
				$(currentSelectedPlayer).remove();
			}

			else if($('#scoreboard table:first tr').length == 3) {
				$("table #bottom:last").before(content);
				$("#away_players_Det").show();
				$(currentSelectedPlayer).remove();
			}

			else if($('#scoreboard table:first tr').length == 4 && $('#scoreboard table:last tr').length <2) {
				matchStartUP=false;
				$("table:last tr:last").after(content);
				prevOverBowler = $(currentSelectedPlayer).text();
				$("#scoreboard").show();
				$("#eachBallUpdate").show();
			}

			$('#scoreboard table tr:nth-child(2)').attr("id", "current");
		}
	}
	else if( batting_Team == "apTName") {
		if(parentID == "away_players_Det") {
			content = "<tr class='active'>"+
							"<td class='name'>"+$(currentSelectedPlayer).text()+"</td>"+
							"<td class='dismisal'></td>"+
							"<td class='runs'>0</td>"+
							"<td class='balls'>0</td>"+
							"<td class='fours'>0</td>"+
							"<td class='sixes'>0</td>"+
							"<td class='strike'>0.0</td>"+
						"</tr>";
			if(!matchStartUP) {
				$("table:first tr:last").before(content);
				$("table:first tr:last").prev().attr("id", "current");
				$("#scoreboard").show();
				$("#eachBallUpdate").show();
				$(currentSelectedPlayer).remove();
			}
		}
		else if(parentID == "home_players_Det") {
			content = "<tr>"+
							"<td class='name'>"+$(currentSelectedPlayer).text()+"</td>"+
							"<td class='overs'>0.0</td>"+
							"<td class='maidens'>0</td>"+
							"<td class='runs'>0</td>"+
							"<td class='wickets'>0</td>"+
							"<td class='econ'>0</td>"+
						"</tr>";
			if(!matchStartUP) {
				console.log("Not first over");
				var alreadyBowled = false;
				var row_position;
				var selectedBowler = $(currentSelectedPlayer).text();
				console.log("selectedBowler: "+selectedBowler);
				var noBowled = $("table:last tr	").size();

				for(var i=2; i<=noBowled; i++) {
					if(selectedBowler == $("table:last tr:nth-child("+i+") td:first").text()) {
						alreadyBowled = true;
						row_position = i;
						break;
					}	
				}
				
				if(alreadyBowled) {
					if (prevOverBowler != selectedBowler) {
						var ovrs_Bowled = $("table:last tr:nth-child("+row_position+") td:nth-child(2)").text().split(".");
						ovrs_Bowled = parseInt(ovrs_Bowled[0]);

						if(ovrs_Bowled < max_bowl_ovrs) {
							console.log("Row number: "+row_position);
							$("table:last tr:nth-child("+row_position+")").attr('id', 'current');
							$("#scoreboard").show();
							$("#eachBallUpdate").show();
						}
						else {
							$(currentSelectedPlayer).remove();
							console.log("Player removed");
							$("#home_players_Det").show();
						}
					}
					else {
						console.log("Player bowled last over.");
						$("#scoreboard").hide();
						$("#eachBallUpdate").hide();
						$("#home_players_Det").show();
					}
				}
				else {
					console.log("New Bowler");
					$("table:last tr:last").after(content);
					$("#scoreboard table:last tr:last").attr("id", "current");
					$("#scoreboard").show();
					$("#eachBallUpdate").show();
				}

				prevOverBowler = selectedBowler;
			}
		}

		if(matchStartUP) {
			if($('#scoreboard table:first tr').length <3) {
				$("table #bottom:last").before(content);
				$("#away_players_Det").show();
				$(currentSelectedPlayer).remove();
			}

			else if($('#scoreboard table:first tr').length == 3) {
				$("table #bottom:last").before(content);
				$("#home_players_Det").show();
				$(currentSelectedPlayer).remove();
			}

			else if($('#scoreboard table:first tr').length == 4 && $('#scoreboard table:last tr').length <2) {
				matchStartUP=false;
				$("table:last tr:last").after(content);
				prevOverBowler = $(currentSelectedPlayer).text();
				$("#scoreboard").show();
				$("#eachBallUpdate").show();
			}

			$('#scoreboard table tr:nth-child(2)').attr("id", "current");
		}
	}
}

function calculate(scoredDiv) {
	var scored = $(scoredDiv).text();
	endofBallUpdates(scored);

	if(isCorrectBall) {
		var bowlerOvers = $("table:last #current .overs").text().split(".");
		bowlerOvers[0] = parseInt(bowlerOvers[0]);
		bowlerOvers[1] = parseInt(bowlerOvers[1]);
		
		var totOvers = $("table:first #bottom #overs").text().split(".");
		totOvers[0] = parseInt(totOvers[0]);
		totOvers[1] = parseInt(totOvers[1]);

		if(extraDelivery == 0) {
			if(bowlerOvers[0] < max_bowl_ovrs) {
				if(bowlerOvers[1] < 5)
					bowlerOvers[1] = bowlerOvers[1] + 1 - extraDelivery;
				else if(bowlerOvers[1] == 5) {
					bowlerOvers[0] = bowlerOvers[0] + 1 - extraDelivery;
					bowlerOvers[1] = 0;
				}

				$("table:last #current .overs").text(bowlerOvers.join("."));
			}
			
			if(totOvers[0] < max_ovrs) {
				if(totOvers[1] < 5)
					totOvers[1] = totOvers[1] + 1 - extraDelivery;
				else if(totOvers[1] == 5) {
					totOvers[0] = totOvers[0] + 1 - extraDelivery;
					totOvers[1] = 0;

					endofOverUpdates();

				    if(totOvers[0] != max_ovrs) {
						$("#scoreboard").hide();
						$("#eachBallUpdate").hide();

						if( batting_Team == "hpTName") 
							$("#away_players_Det").show();
						else
							$("#home_players_Det").show();

						if( batting_Team == "apTName") 
							$("#home_players_Det").show();
						else
							$("#away_players_Det").show();
					}
				}

				$("table:first #bottom #overs").text(totOvers.join("."));
			}

			if(totOvers[0] == max_ovrs) {
				$("#eachBallUpdate").hide();
				$("#home_players_Det").hide();
				$("#away_players_Det").hide();
			}
		}
		extraDelivery = 0;
	}
	else
		isCorrectBall = true;	
}

function endofOverUpdates() {
	$("#eachBallRuns").append("<b>|</b> ");

	if(isMaidenOver) {
		var maidens = $("table:last #current .maidens").text();
		maidens = parseInt(maidens) + 1;
		$("table:last #current .maidens").text(maidens);
	}
	isMaidenOver = true;

	var check1 = $("table:first .active:first").attr('id');

    if(check1 == 'current') {
		$('table:first .active:first').removeAttr('id');
		$('table:first .active:last').attr('id', 'current');
	}
	else {
		$('table:first .active:last').removeAttr('id');
		$('table:first .active:first').attr('id', 'current');
	}

    $("table:last #current").removeAttr('id');
}

function endofBallUpdates(perBallRun) {
	var ballUpdate = $("table:first #bottom #tot").text().split("/");
	ballUpdate[0] = parseInt(ballUpdate[0]);
	ballUpdate[1] = parseInt(ballUpdate[1]);

	if(perBallRun == "No-ball") {
		$("#eachBallRuns").append("nb+");
		isCorrectBall = false;
		extraDelivery = 1;
	}
	else if(perBallRun == "Wide") {
		$("#eachBallRuns").append("wd ");
		extraDelivery = 1;
	}
	else if(perBallRun == "W") {
		var balls = $('table:first #current .balls').text();
		console.log(balls);
		balls = parseInt(balls) + 1;
		$('table:first #current .balls').text(balls);

		var runs = $("table:first #current .runs").text();
		var sr = ((runs / balls) * 100).toFixed(2)
		$("table:first #current .strike").text(sr);

		$('table:first #current').removeAttr('id').removeClass('active');
		
		
		ballUpdate[1] = parseInt(ballUpdate[1]) + 1;

		var wickets_taken = $('table:last #current .wickets').text();
		wickets_taken = parseInt(wickets_taken) + 1;
		$('table:last #current .wickets').text(wickets_taken);

		$("#scorecard").hide();
		$("#eachBallUpdate").hide();

		if($('#scoreboard table').attr('id') == "hpTName")
			$("#home_players_Det").show();
		else
			$("#away_players_Det").show();

		$("#eachBallRuns").append("w ");
	}
	else {
		var scored = parseInt(perBallRun);

		var balls = $('table:first #current .balls').text();
		balls = parseInt(balls) + 1;
		$('table:first #current .balls').text(balls);

		var runs = $("table:first #current .runs").text();
		runs = parseInt(runs);
		runs += scored;
		$("table:first #current .runs").text(runs);

		var sr = ((runs / balls) * 100).toFixed(2)
		$("table:first #current .strike").text(sr);
		
		if(scored == 1 || scored == 2 || scored == 3 || scored == 4 || scored == 6)
			isMaidenOver = false;

		$("#eachBallRuns").append(scored+" ");

		if(scored == 4) {
			var boundaries = $("table:first #current .fours").text();
			$("table:first #current .fours").text(parseInt(boundaries)+1);
		}
			
		if(scored == 6) {
			var boundaries = $("table:first #current .sixes").text();
			$("table:first #current .sixes").text(parseInt(boundaries)+1);
		}
			
		if(scored % 2 != 0) {
			var check1 = $("table:first .active:first").attr('id');
		    if(check1 == 'current') {
				$('table:first .active:first').removeAttr('id');
				$('table:first .active:last').attr('id', 'current');
			}
			else {
				$('table:first .active:last').removeAttr('id');
				$('table:first .active:first').attr('id', 'current');
			}
		}

		ballUpdate[0] += scored;

		var bowlruns = $("table:last #current .runs").text();
		bowlruns = parseInt(bowlruns) + scored;
		$("table:last #current .runs").text(bowlruns);
	}
	

	$("table:first #bottom #tot").text(ballUpdate.join("/"));

	var bowlruns = $("table:last #current .runs").text();
	bowlruns = parseInt(bowlruns);

	var bowlballs = $("table:last #current .overs").text().split(".");
	bowlballs = (parseInt(bowlballs[0])*6) + parseInt(bowlballs[1])+1;
	console.log("runs: "+bowlruns);
	console.log("balls: "+bowlballs);
	$("table:last #current .econ").text(((bowlruns / bowlballs)*6).toFixed(2));
}

/* To Update the Settings for the match - Future Implementation */
function update_settings() {
	$("#first_page").hide();
	$("#second_page").hide();
	$("#third_page").hide();
}

function app_details() {
	$("#first_page").hide();
	$("#fifth_page").show();
}