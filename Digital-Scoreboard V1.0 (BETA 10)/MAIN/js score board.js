setTimeout(function () {
	document.getElementById("main_toggle_wrap").style.backgroundColor = "#00000000";
}, 200);
setTimeout(function () {
	document.getElementById("main_toggle_wrap").style.opacity = 0;
	document.getElementById("main_toggle_wrap").style.zIndex = -1;
}, 400);


let main_1_input_button_color = "#1ba5ff";
let main_2_input_button_color = "#c527ff";
let main_3_input_button_color = "#ff6500";

let auto_toggle_out_display;
let auto_chenge_over_count;


let mainscore = 0;
let wickets = 0;
let overs = 0;
let balls_per_overs = 0;
let runrate = 0;
let runratedisp = 0;

let bowler_stats_score = 0;
let bowler_stats_wickets = 0;
let bowler_stats_overs = 0;
let bowler_stats_balls_per_overs = 0;

let score_plus_count = 0;
let run_out_count = 0;
let click_count = 0;
let com = "";

let all_balls = 0;
let official_balls = 0;
let extra_balls = 0;
let extra_score = 0;

let batteam = "";
let ballteam = "";

let bater1 = "";
let bater2 = "";
let bowler = "";

let bater1_disp = "";
let bater2_disp = "";
let bowler_disp = "";

let bater_top_score = 0;
let bater_bottom_score = 0;
let bater_top_ballno = 0;
let bater_bottom_ballno = 0;


let team1_logo = "";
let team2_logo = "";

let team1 = "";
let team2 = "";

let Team1player1inputVal = "";
let Team1player2inputVal = "";
let Team1player3inputVal = "";
let Team1player4inputVal = "";
let Team1player5inputVal = "";
let Team1player6inputVal = "";
let Team1player7inputVal = "";
let Team1player8inputVal = "";
let Team1player9inputVal = "";
let Team1player10inputVal = "";
let Team1player11inputVal = "";

let Team2player1inputVal = "";
let Team2player2inputVal = "";
let Team2player3inputVal = "";
let Team2player4inputVal = "";
let Team2player5inputVal = "";
let Team2player6inputVal = "";
let Team2player7inputVal = "";
let Team2player8inputVal = "";
let Team2player9inputVal = "";
let Team2player10inputVal = "";
let Team2player11inputVal = "";

startup_load();

function Function_save_players() {
	team1_logo = document.getElementById("Team1_logo").value;
	team2_logo = document.getElementById("Team2_logo").value;

	team1 = document.getElementById("Team1Name").value;
	team2 = document.getElementById("Team2Name").value;

	Team1player1inputVal = document.getElementById("Team1player1").value;
	Team1player2inputVal = document.getElementById("Team1player2").value;
	Team1player3inputVal = document.getElementById("Team1player3").value;
	Team1player4inputVal = document.getElementById("Team1player4").value;
	Team1player5inputVal = document.getElementById("Team1player5").value;
	Team1player6inputVal = document.getElementById("Team1player6").value;
	Team1player7inputVal = document.getElementById("Team1player7").value;
	Team1player8inputVal = document.getElementById("Team1player8").value;
	Team1player9inputVal = document.getElementById("Team1player9").value;
	Team1player10inputVal = document.getElementById("Team1player10").value;
	Team1player11inputVal = document.getElementById("Team1player11").value;

	Team2player1inputVal = document.getElementById("Team2player1").value;
	Team2player2inputVal = document.getElementById("Team2player2").value;
	Team2player3inputVal = document.getElementById("Team2player3").value;
	Team2player4inputVal = document.getElementById("Team2player4").value;
	Team2player5inputVal = document.getElementById("Team2player5").value;
	Team2player6inputVal = document.getElementById("Team2player6").value;
	Team2player7inputVal = document.getElementById("Team2player7").value;
	Team2player8inputVal = document.getElementById("Team2player8").value;
	Team2player9inputVal = document.getElementById("Team2player9").value;
	Team2player10inputVal = document.getElementById("Team2player10").value;
	Team2player11inputVal = document.getElementById("Team2player11").value;

	save_variables();

	document.getElementById("notification_panel_left_button").style.opacity = 0;
	document.getElementById("notification_panel_right_button").style.opacity = 0;
	notify_type = "save_players";

	
	setTimeout(function () {
		notify("open", "correct");
	}, 200);
	setTimeout(function () {
		notify("close", "correct");
	}, 2000);

}

reload_players();

function Function_getplayers() {
	team1_logo = document.getElementById("Team1_logo").value;
	team2_logo = document.getElementById("Team2_logo").value;

	team1 = document.getElementById("Team1Name").value;
	team2 = document.getElementById("Team2Name").value;

	Team1player1inputVal = document.getElementById("Team1player1").value;
	Team1player2inputVal = document.getElementById("Team1player2").value;
	Team1player3inputVal = document.getElementById("Team1player3").value;
	Team1player4inputVal = document.getElementById("Team1player4").value;
	Team1player5inputVal = document.getElementById("Team1player5").value;
	Team1player6inputVal = document.getElementById("Team1player6").value;
	Team1player7inputVal = document.getElementById("Team1player7").value;
	Team1player8inputVal = document.getElementById("Team1player8").value;
	Team1player9inputVal = document.getElementById("Team1player9").value;
	Team1player10inputVal = document.getElementById("Team1player10").value;
	Team1player11inputVal = document.getElementById("Team1player11").value;

	Team2player1inputVal = document.getElementById("Team2player1").value;
	Team2player2inputVal = document.getElementById("Team2player2").value;
	Team2player3inputVal = document.getElementById("Team2player3").value;
	Team2player4inputVal = document.getElementById("Team2player4").value;
	Team2player5inputVal = document.getElementById("Team2player5").value;
	Team2player6inputVal = document.getElementById("Team2player6").value;
	Team2player7inputVal = document.getElementById("Team2player7").value;
	Team2player8inputVal = document.getElementById("Team2player8").value;
	Team2player9inputVal = document.getElementById("Team2player9").value;
	Team2player10inputVal = document.getElementById("Team2player10").value;
	Team2player11inputVal = document.getElementById("Team2player11").value;

	//--------------------------------------------------------------

	change_button_type("false", "setplayers");

	document.getElementById("selectbat1").style.backgroundColor = "#ff0000";
	document.getElementById("selectbat2").style.backgroundColor = "#ff0000";
	document.getElementById("selectbowler_name").style.backgroundColor = "#ff0000";


	team1 = localStorage.getItem("Team1Name_save");
	team2 = localStorage.getItem("Team2Name_save");

	document.getElementById("Team1Name").value = team1;
	document.getElementById("Team2Name").value = team2;

	team1 = document.getElementById("Team1Name").value;
	team2 = document.getElementById("Team2Name").value;

	batteam = team1
	ballteam = team2
	document.getElementById("bat_team").innerHTML = batteam;
	document.getElementById("ball_team").innerHTML = ballteam;


	team1_logo = localStorage.getItem("team1_logo_save");
	team2_logo = localStorage.getItem("team2_logo_save");

	document.getElementById("Team1_logo").value = team1_logo;
	document.getElementById("Team2_logo").value = team2_logo;

	team1_logo = document.getElementById("Team1_logo").value;
	team2_logo = document.getElementById("Team2_logo").value;
	document.getElementById("logo").src = team1_logo;


	if (batteam == team1) {

		Team1player1inputVal = localStorage.getItem("Team1player1inputVal_save");
		Team1player2inputVal = localStorage.getItem("Team1player2inputVal_save");
		Team1player3inputVal = localStorage.getItem("Team1player3inputVal_save");
		Team1player4inputVal = localStorage.getItem("Team1player4inputVal_save");
		Team1player5inputVal = localStorage.getItem("Team1player5inputVal_save");
		Team1player6inputVal = localStorage.getItem("Team1player6inputVal_save");
		Team1player7inputVal = localStorage.getItem("Team1player7inputVal_save");
		Team1player8inputVal = localStorage.getItem("Team1player8inputVal_save");
		Team1player9inputVal = localStorage.getItem("Team1player9inputVal_save");
		Team1player10inputVal = localStorage.getItem("Team1player10inputVal_save");
		Team1player11inputVal = localStorage.getItem("Team1player11inputVal_save");

		document.getElementById("Team1player1").value = Team1player1inputVal;
		document.getElementById("Team1player2").value = Team1player2inputVal;
		document.getElementById("Team1player3").value = Team1player3inputVal;
		document.getElementById("Team1player4").value = Team1player4inputVal;
		document.getElementById("Team1player5").value = Team1player5inputVal;
		document.getElementById("Team1player6").value = Team1player6inputVal;
		document.getElementById("Team1player7").value = Team1player7inputVal;
		document.getElementById("Team1player8").value = Team1player8inputVal;
		document.getElementById("Team1player9").value = Team1player9inputVal;
		document.getElementById("Team1player10").value = Team1player10inputVal;
		document.getElementById("Team1player11").value = Team1player11inputVal;

		Team1player1inputVal = document.getElementById("Team1player1").value;
		Team1player2inputVal = document.getElementById("Team1player2").value;
		Team1player3inputVal = document.getElementById("Team1player3").value;
		Team1player4inputVal = document.getElementById("Team1player4").value;
		Team1player5inputVal = document.getElementById("Team1player5").value;
		Team1player6inputVal = document.getElementById("Team1player6").value;
		Team1player7inputVal = document.getElementById("Team1player7").value;
		Team1player8inputVal = document.getElementById("Team1player8").value;
		Team1player9inputVal = document.getElementById("Team1player9").value;
		Team1player10inputVal = document.getElementById("Team1player10").value;
		Team1player11inputVal = document.getElementById("Team1player11").value;

		var x = document.getElementById("selectbat1")
		x.options[x.selectedIndex = "0"].text = Team1player1inputVal
		x.options[x.selectedIndex = "1"].text = Team1player2inputVal
		x.options[x.selectedIndex = "2"].text = Team1player3inputVal
		x.options[x.selectedIndex = "3"].text = Team1player4inputVal
		x.options[x.selectedIndex = "4"].text = Team1player5inputVal
		x.options[x.selectedIndex = "5"].text = Team1player6inputVal
		x.options[x.selectedIndex = "6"].text = Team1player7inputVal
		x.options[x.selectedIndex = "7"].text = Team1player8inputVal
		x.options[x.selectedIndex = "8"].text = Team1player9inputVal
		x.options[x.selectedIndex = "9"].text = Team1player10inputVal
		x.options[x.selectedIndex = "10"].text = Team1player11inputVal

		var x = document.getElementById("selectbat2")
		x.options[x.selectedIndex = "0"].text = Team1player1inputVal
		x.options[x.selectedIndex = "1"].text = Team1player2inputVal
		x.options[x.selectedIndex = "2"].text = Team1player3inputVal
		x.options[x.selectedIndex = "3"].text = Team1player4inputVal
		x.options[x.selectedIndex = "4"].text = Team1player5inputVal
		x.options[x.selectedIndex = "5"].text = Team1player6inputVal
		x.options[x.selectedIndex = "6"].text = Team1player7inputVal
		x.options[x.selectedIndex = "7"].text = Team1player8inputVal
		x.options[x.selectedIndex = "8"].text = Team1player9inputVal
		x.options[x.selectedIndex = "9"].text = Team1player10inputVal
		x.options[x.selectedIndex = "10"].text = Team1player11inputVal




		Team2player1inputVal = localStorage.getItem("Team2player1inputVal_save");
		Team2player2inputVal = localStorage.getItem("Team2player2inputVal_save");
		Team2player3inputVal = localStorage.getItem("Team2player3inputVal_save");
		Team2player4inputVal = localStorage.getItem("Team2player4inputVal_save");
		Team2player5inputVal = localStorage.getItem("Team2player5inputVal_save");
		Team2player6inputVal = localStorage.getItem("Team2player6inputVal_save");
		Team2player7inputVal = localStorage.getItem("Team2player7inputVal_save");
		Team2player8inputVal = localStorage.getItem("Team2player8inputVal_save");
		Team2player9inputVal = localStorage.getItem("Team2player9inputVal_save");
		Team2player10inputVal = localStorage.getItem("Team2player10inputVal_save");
		Team2player11inputVal = localStorage.getItem("Team2player11inputVal_save");

		document.getElementById("Team2player1").value = Team2player1inputVal;
		document.getElementById("Team2player2").value = Team2player2inputVal;
		document.getElementById("Team2player3").value = Team2player3inputVal;
		document.getElementById("Team2player4").value = Team2player4inputVal;
		document.getElementById("Team2player5").value = Team2player5inputVal;
		document.getElementById("Team2player6").value = Team2player6inputVal;
		document.getElementById("Team2player7").value = Team2player7inputVal;
		document.getElementById("Team2player8").value = Team2player8inputVal;
		document.getElementById("Team2player9").value = Team2player9inputVal;
		document.getElementById("Team2player10").value = Team2player10inputVal;
		document.getElementById("Team2player11").value = Team2player11inputVal;

		Team2player1inputVal = document.getElementById("Team2player1").value;
		Team2player2inputVal = document.getElementById("Team2player2").value;
		Team2player3inputVal = document.getElementById("Team2player3").value;
		Team2player4inputVal = document.getElementById("Team2player4").value;
		Team2player5inputVal = document.getElementById("Team2player5").value;
		Team2player6inputVal = document.getElementById("Team2player6").value;
		Team2player7inputVal = document.getElementById("Team2player7").value;
		Team2player8inputVal = document.getElementById("Team2player8").value;
		Team2player9inputVal = document.getElementById("Team2player9").value;
		Team2player10inputVal = document.getElementById("Team2player10").value;
		Team2player11inputVal = document.getElementById("Team2player11").value;

		var x = document.getElementById("selectbowler_name")
		x.options[x.selectedIndex = "0"].text = Team2player1inputVal
		x.options[x.selectedIndex = "1"].text = Team2player2inputVal
		x.options[x.selectedIndex = "2"].text = Team2player3inputVal
		x.options[x.selectedIndex = "3"].text = Team2player4inputVal
		x.options[x.selectedIndex = "4"].text = Team2player5inputVal
		x.options[x.selectedIndex = "5"].text = Team2player6inputVal
		x.options[x.selectedIndex = "6"].text = Team2player7inputVal
		x.options[x.selectedIndex = "7"].text = Team2player8inputVal
		x.options[x.selectedIndex = "8"].text = Team2player9inputVal
		x.options[x.selectedIndex = "9"].text = Team2player10inputVal
		x.options[x.selectedIndex = "10"].text = Team2player11inputVal
	}
}


function reload_players() {
	team1_logo = localStorage.getItem("team1_logo_save");
	team2_logo = localStorage.getItem("team2_logo_save");

	document.getElementById("Team1_logo").value = team1_logo;
	document.getElementById("Team2_logo").value = team2_logo;

	team1 = localStorage.getItem("Team1Name_save");
	team2 = localStorage.getItem("Team2Name_save");

	document.getElementById("Team1Name").value = team1;
	document.getElementById("Team2Name").value = team2;

	Team1player1inputVal = localStorage.getItem("Team1player1inputVal_save");
	Team1player2inputVal = localStorage.getItem("Team1player2inputVal_save");
	Team1player3inputVal = localStorage.getItem("Team1player3inputVal_save");
	Team1player4inputVal = localStorage.getItem("Team1player4inputVal_save");
	Team1player5inputVal = localStorage.getItem("Team1player5inputVal_save");
	Team1player6inputVal = localStorage.getItem("Team1player6inputVal_save");
	Team1player7inputVal = localStorage.getItem("Team1player7inputVal_save");
	Team1player8inputVal = localStorage.getItem("Team1player8inputVal_save");
	Team1player9inputVal = localStorage.getItem("Team1player9inputVal_save");
	Team1player10inputVal = localStorage.getItem("Team1player10inputVal_save");
	Team1player11inputVal = localStorage.getItem("Team1player11inputVal_save");

	document.getElementById("Team1player1").value = Team1player1inputVal;
	document.getElementById("Team1player2").value = Team1player2inputVal;
	document.getElementById("Team1player3").value = Team1player3inputVal;
	document.getElementById("Team1player4").value = Team1player4inputVal;
	document.getElementById("Team1player5").value = Team1player5inputVal;
	document.getElementById("Team1player6").value = Team1player6inputVal;
	document.getElementById("Team1player7").value = Team1player7inputVal;
	document.getElementById("Team1player8").value = Team1player8inputVal;
	document.getElementById("Team1player9").value = Team1player9inputVal;
	document.getElementById("Team1player10").value = Team1player10inputVal;
	document.getElementById("Team1player11").value = Team1player11inputVal;


	Team2player1inputVal = localStorage.getItem("Team2player1inputVal_save");
	Team2player2inputVal = localStorage.getItem("Team2player2inputVal_save");
	Team2player3inputVal = localStorage.getItem("Team2player3inputVal_save");
	Team2player4inputVal = localStorage.getItem("Team2player4inputVal_save");
	Team2player5inputVal = localStorage.getItem("Team2player5inputVal_save");
	Team2player6inputVal = localStorage.getItem("Team2player6inputVal_save");
	Team2player7inputVal = localStorage.getItem("Team2player7inputVal_save");
	Team2player8inputVal = localStorage.getItem("Team2player8inputVal_save");
	Team2player9inputVal = localStorage.getItem("Team2player9inputVal_save");
	Team2player10inputVal = localStorage.getItem("Team2player10inputVal_save");
	Team2player11inputVal = localStorage.getItem("Team2player11inputVal_save");

	document.getElementById("Team2player1").value = Team2player1inputVal;
	document.getElementById("Team2player2").value = Team2player2inputVal;
	document.getElementById("Team2player3").value = Team2player3inputVal;
	document.getElementById("Team2player4").value = Team2player4inputVal;
	document.getElementById("Team2player5").value = Team2player5inputVal;
	document.getElementById("Team2player6").value = Team2player6inputVal;
	document.getElementById("Team2player7").value = Team2player7inputVal;
	document.getElementById("Team2player8").value = Team2player8inputVal;
	document.getElementById("Team2player9").value = Team2player9inputVal;
	document.getElementById("Team2player10").value = Team2player10inputVal;
	document.getElementById("Team2player11").value = Team2player11inputVal;
}


let Function_switch_team_stete = true;
function Function_switch_team() {

	change_button_type("false", "setplayers");

	document.getElementById("selectbat1").style.backgroundColor = "#ff0000";
	document.getElementById("selectbat2").style.backgroundColor = "#ff0000";
	document.getElementById("selectbowler_name").style.backgroundColor = "#ff0000";
	change_button_type("false", "resetbatter1score");
	change_button_type("false", "resetbatter2score");

	team1 = document.getElementById("Team1Name").value;
	team2 = document.getElementById("Team2Name").value;

	if (Function_switch_team_stete == true) {//switch on

		batteam = team2
		ballteam = team1

		document.getElementById("bat_team").innerHTML = batteam;
		document.getElementById("ball_team").innerHTML = ballteam;

		team2_logo = document.getElementById("Team2_logo").value;
		document.getElementById("logo").src = team2_logo;

		Team2player1inputVal = document.getElementById("Team2player1").value;
		Team2player2inputVal = document.getElementById("Team2player2").value;
		Team2player3inputVal = document.getElementById("Team2player3").value;
		Team2player4inputVal = document.getElementById("Team2player4").value;
		Team2player5inputVal = document.getElementById("Team2player5").value;
		Team2player6inputVal = document.getElementById("Team2player6").value;
		Team2player7inputVal = document.getElementById("Team2player7").value;
		Team2player8inputVal = document.getElementById("Team2player8").value;
		Team2player9inputVal = document.getElementById("Team2player9").value;
		Team2player10inputVal = document.getElementById("Team2player10").value;
		Team2player11inputVal = document.getElementById("Team2player11").value;

		var x = document.getElementById("selectbat1")
		x.options[x.selectedIndex = "0"].text = Team2player1inputVal
		x.options[x.selectedIndex = "1"].text = Team2player2inputVal
		x.options[x.selectedIndex = "2"].text = Team2player3inputVal
		x.options[x.selectedIndex = "3"].text = Team2player4inputVal
		x.options[x.selectedIndex = "4"].text = Team2player5inputVal
		x.options[x.selectedIndex = "5"].text = Team2player6inputVal
		x.options[x.selectedIndex = "6"].text = Team2player7inputVal
		x.options[x.selectedIndex = "7"].text = Team2player8inputVal
		x.options[x.selectedIndex = "8"].text = Team2player9inputVal
		x.options[x.selectedIndex = "9"].text = Team2player10inputVal
		x.options[x.selectedIndex = "10"].text = Team2player11inputVal

		var x = document.getElementById("selectbat2")
		x.options[x.selectedIndex = "0"].text = Team2player1inputVal
		x.options[x.selectedIndex = "1"].text = Team2player2inputVal
		x.options[x.selectedIndex = "2"].text = Team2player3inputVal
		x.options[x.selectedIndex = "3"].text = Team2player4inputVal
		x.options[x.selectedIndex = "4"].text = Team2player5inputVal
		x.options[x.selectedIndex = "5"].text = Team2player6inputVal
		x.options[x.selectedIndex = "6"].text = Team2player7inputVal
		x.options[x.selectedIndex = "7"].text = Team2player8inputVal
		x.options[x.selectedIndex = "8"].text = Team2player9inputVal
		x.options[x.selectedIndex = "9"].text = Team2player10inputVal
		x.options[x.selectedIndex = "10"].text = Team2player11inputVal

		Team1player1inputVal = document.getElementById("Team1player1").value;
		Team1player2inputVal = document.getElementById("Team1player2").value;
		Team1player3inputVal = document.getElementById("Team1player3").value;
		Team1player4inputVal = document.getElementById("Team1player4").value;
		Team1player5inputVal = document.getElementById("Team1player5").value;
		Team1player6inputVal = document.getElementById("Team1player6").value;
		Team1player7inputVal = document.getElementById("Team1player7").value;
		Team1player8inputVal = document.getElementById("Team1player8").value;
		Team1player9inputVal = document.getElementById("Team1player9").value;
		Team1player10inputVal = document.getElementById("Team1player10").value;
		Team1player11inputVal = document.getElementById("Team1player11").value;

		var x = document.getElementById("selectbowler_name")
		x.options[x.selectedIndex = "0"].text = Team1player1inputVal
		x.options[x.selectedIndex = "1"].text = Team1player2inputVal
		x.options[x.selectedIndex = "2"].text = Team1player3inputVal
		x.options[x.selectedIndex = "3"].text = Team1player4inputVal
		x.options[x.selectedIndex = "4"].text = Team1player5inputVal
		x.options[x.selectedIndex = "5"].text = Team1player6inputVal
		x.options[x.selectedIndex = "6"].text = Team1player7inputVal
		x.options[x.selectedIndex = "7"].text = Team1player8inputVal
		x.options[x.selectedIndex = "8"].text = Team1player9inputVal
		x.options[x.selectedIndex = "9"].text = Team1player10inputVal
		x.options[x.selectedIndex = "10"].text = Team1player11inputVal
	}

	else if (Function_switch_team_stete == false) {//switch 0ff

		batteam = team1
		ballteam = team2

		document.getElementById("bat_team").innerHTML = batteam;
		document.getElementById("ball_team").innerHTML = ballteam;

		team1_logo = document.getElementById("Team1_logo").value;
		document.getElementById("logo").src = team1_logo;

		Team1player1inputVal = document.getElementById("Team1player1").value;
		Team1player2inputVal = document.getElementById("Team1player2").value;
		Team1player3inputVal = document.getElementById("Team1player3").value;
		Team1player4inputVal = document.getElementById("Team1player4").value;
		Team1player5inputVal = document.getElementById("Team1player5").value;
		Team1player6inputVal = document.getElementById("Team1player6").value;
		Team1player7inputVal = document.getElementById("Team1player7").value;
		Team1player8inputVal = document.getElementById("Team1player8").value;
		Team1player9inputVal = document.getElementById("Team1player9").value;
		Team1player10inputVal = document.getElementById("Team1player10").value;
		Team1player11inputVal = document.getElementById("Team1player11").value;

		var x = document.getElementById("selectbat1")
		x.options[x.selectedIndex = "0"].text = Team1player1inputVal
		x.options[x.selectedIndex = "1"].text = Team1player2inputVal
		x.options[x.selectedIndex = "2"].text = Team1player3inputVal
		x.options[x.selectedIndex = "3"].text = Team1player4inputVal
		x.options[x.selectedIndex = "4"].text = Team1player5inputVal
		x.options[x.selectedIndex = "5"].text = Team1player6inputVal
		x.options[x.selectedIndex = "6"].text = Team1player7inputVal
		x.options[x.selectedIndex = "7"].text = Team1player8inputVal
		x.options[x.selectedIndex = "8"].text = Team1player9inputVal
		x.options[x.selectedIndex = "9"].text = Team1player10inputVal
		x.options[x.selectedIndex = "10"].text = Team1player11inputVal

		var x = document.getElementById("selectbat2")
		x.options[x.selectedIndex = "0"].text = Team1player1inputVal
		x.options[x.selectedIndex = "1"].text = Team1player2inputVal
		x.options[x.selectedIndex = "2"].text = Team1player3inputVal
		x.options[x.selectedIndex = "3"].text = Team1player4inputVal
		x.options[x.selectedIndex = "4"].text = Team1player5inputVal
		x.options[x.selectedIndex = "5"].text = Team1player6inputVal
		x.options[x.selectedIndex = "6"].text = Team1player7inputVal
		x.options[x.selectedIndex = "7"].text = Team1player8inputVal
		x.options[x.selectedIndex = "8"].text = Team1player9inputVal
		x.options[x.selectedIndex = "9"].text = Team1player10inputVal
		x.options[x.selectedIndex = "10"].text = Team1player11inputVal

		Team2player1inputVal = document.getElementById("Team2player1").value;
		Team2player2inputVal = document.getElementById("Team2player2").value;
		Team2player3inputVal = document.getElementById("Team2player3").value;
		Team2player4inputVal = document.getElementById("Team2player4").value;
		Team2player5inputVal = document.getElementById("Team2player5").value;
		Team2player6inputVal = document.getElementById("Team2player6").value;
		Team2player7inputVal = document.getElementById("Team2player7").value;
		Team2player8inputVal = document.getElementById("Team2player8").value;
		Team2player9inputVal = document.getElementById("Team2player9").value;
		Team2player10inputVal = document.getElementById("Team2player10").value;
		Team2player11inputVal = document.getElementById("Team2player11").value;

		var x = document.getElementById("selectbowler_name")
		x.options[x.selectedIndex = "0"].text = Team2player1inputVal
		x.options[x.selectedIndex = "1"].text = Team2player2inputVal
		x.options[x.selectedIndex = "2"].text = Team2player3inputVal
		x.options[x.selectedIndex = "3"].text = Team2player4inputVal
		x.options[x.selectedIndex = "4"].text = Team2player5inputVal
		x.options[x.selectedIndex = "5"].text = Team2player6inputVal
		x.options[x.selectedIndex = "6"].text = Team2player7inputVal
		x.options[x.selectedIndex = "7"].text = Team2player8inputVal
		x.options[x.selectedIndex = "8"].text = Team2player9inputVal
		x.options[x.selectedIndex = "9"].text = Team2player10inputVal
		x.options[x.selectedIndex = "10"].text = Team2player11inputVal
	}
	Function_switch_team_stete = !Function_switch_team_stete;
}


function Function_setplayers() {
	var bater1 = document.getElementById("selectbat1").value;
	var bater2 = document.getElementById("selectbat2").value;
	var bowler = document.getElementById("selectbowler_name").value;
	bater1_disp = bater1;
	bater2_disp = bater2;
	bowler_disp = bowler;
	document.getElementById("bater_top").innerHTML = bater1_disp;
	document.getElementById("bater_bottom").innerHTML = bater2_disp;
	document.getElementById("bowler_name").innerHTML = bowler_disp;

	bowler_stats_score = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_score"));
	bowler_stats_wickets = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_wickets"));
	bowler_stats_overs = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_overs"));
	bowler_stats_balls_per_overs = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_balls_per_overs"));

	if (bowler_stats_score == null) {
		bowler_stats_score = 0;
	}
	if (bowler_stats_wickets == null) {
		bowler_stats_wickets = 0;
	}
	if (bowler_stats_overs == null) {
		bowler_stats_overs = 0;
	}
	if (bowler_stats_balls_per_overs == null) {
		bowler_stats_balls_per_overs = 0;
	}

	document.getElementById("setplayers").style.backgroundColor = "#fff";

	document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";

	document.getElementById("selectbat1").style.backgroundColor = "#fff";
	document.getElementById("selectbat2").style.backgroundColor = "#fff";
	document.getElementById("selectbowler_name").style.backgroundColor = "#fff";
	change_button_type("false", "resetbatter1score");
	change_button_type("false", "resetbatter2score");
	change_button_type("false", "setplayers");

	update_web();
}

function Function_check_player_disp_score_selectbat1() {
	var bater1 = document.getElementById("selectbat1").value;

	if (bater1_disp !== bater1 && bater_top_score == 0 && bater_top_ballno == 0) {
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}

	else if (bowler_disp !== bowler && bater_top_score !== 0 || bater_top_ballno !== 0) {
		change_button_type("false", "setplayers");
		change_button_type("true", "resetbatter1score");
		document.getElementById("resetbatter1score").style.backgroundColor = "#ff0000";
	}

}

function Function_check_player_disp_score_selectbat2() {
	var bater2 = document.getElementById("selectbat2").value;

	if (bater2_disp !== bater2 && bater_bottom_score == 0 && bater_bottom_ballno == 0) {
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}

	if (bater2_disp !== bater2 && bater_bottom_score !== 0 || bater_bottom_ballno !== 0) {
		change_button_type("false", "setplayers");
		change_button_type("true", "resetbatter2score");
		document.getElementById("resetbatter2score").style.backgroundColor = "#ff0000";
	}

}

function Function_check_player_disp_score_selectbowler_name() {
	var bowler = document.getElementById("selectbowler_name").value;

	if (bowler_disp !== bowler && bowler_stats_score == 0 && bowler_stats_wickets == 0 && bowler_stats_overs == 0 && bowler_stats_balls_per_overs == 0) {
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}

	else if (bowler_disp !== bowler && bowler_stats_score !== 0 || bowler_stats_wickets !== 0 || bowler_stats_overs !== 0 || bowler_stats_balls_per_overs !== 0) {
		change_button_type("false", "setplayers");
		change_button_type("true", "resetbowlerstats");
		document.getElementById("resetbowlerstats").style.backgroundColor = "#ff0000";
	}
}


function Function_save_bowler_stats() {
	var bowler = document.getElementById("selectbowler_name").value;

	localStorage.setItem(bowler + " = bowler_stats_score", bowler_stats_score);
	localStorage.setItem(bowler + " = bowler_stats_wickets", bowler_stats_wickets);
	localStorage.setItem(bowler + " = bowler_stats_overs", bowler_stats_overs);
	localStorage.setItem(bowler + " = bowler_stats_balls_per_overs", bowler_stats_balls_per_overs);
}


document.getElementById("count1").innerHTML = mainscore + "/" + wickets;

runrate = mainscore / overs;
runratedisp = runrate;
runratedisp = runratedisp.toFixed(2);
document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;
document.getElementById("over").innerHTML = overs + "." + balls_per_overs;
document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";


document.getElementById("overminus1").style.backgroundColor = "#6d6d6d";
document.getElementById("overminus1").style.cursor = "not-allowed";
const overminus1 = document.getElementById("overminus1"); overminus1.disabled = true;

function Function_over_1plus() {
	document.getElementById("overminus1").style.backgroundColor = main_1_input_button_color;
	document.getElementById("overminus1").style.cursor = "pointer";
	const overminus1 = document.getElementById("overminus1"); overminus1.disabled = false;
	click_count = click_count + 1;

	balls_per_overs = 0;
	bowler_stats_balls_per_overs = 0;
	overs = overs + 1;
	bowler_stats_overs = bowler_stats_overs + 1;
	runrate = mainscore / overs;
	runratedisp = runrate;
	runratedisp = runratedisp.toFixed(2);
	document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;
	document.getElementById("over").innerHTML = overs + "." + balls_per_overs;
	document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";
	document.getElementById("overplus1").style.backgroundColor = main_1_input_button_color;

	if (overs == 1) {
		document.getElementById("toggle_run_rate").style.backgroundColor = "#ff0000";
	}

	over_time_line_count = 1;
	while (over_time_line_count <= 13) {
		document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "";
		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#00000000";
		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundImage = "radial-gradient(62% 62%, #00000000, #00000000)";
		over_time_line_count++;
	}

	over_time_line_count = 0;
	//document.getElementById("time_line_count").innerHTML = over_time_line_count;
	Function_save_bowler_stats();
	save_variables();
}

function Function_over_1minus() {
	click_count = click_count - 1;
	if (click_count == "0") {
		document.getElementById("overminus1").style.backgroundColor = "#6d6d6d";
		document.getElementById("overminus1").style.cursor = "not-allowed";
		const overminus1 = document.getElementById("overminus1"); overminus1.disabled = true;
		document.getElementById("toggle_run_rate").style.backgroundColor = "#fff";
	}


	overs = overs - 1;
	bowler_stats_overs = bowler_stats_overs - 1;
	runrate = mainscore / overs;
	runratedisp = runrate;
	runratedisp = runratedisp.toFixed(2);
	document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;
	document.getElementById("over").innerHTML = overs + "." + balls_per_overs;
	document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";
	save_variables();
}

function Function_over_reset() {
	document.getElementById("overreset").style.backgroundColor = "#fff";

	click_count = 0;
	document.getElementById("overminus1").style.backgroundColor = "#6d6d6d";
	document.getElementById("overminus1").style.cursor = "not-allowed";
	const overminus1 = document.getElementById("overminus1"); overminus1.disabled = true;

	balls_per_overs = 0;
	overs = 0;
	runrate = mainscore / overs;
	runratedisp = runrate;
	runratedisp = runratedisp.toFixed(2);
	document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;
	document.getElementById("over").innerHTML = overs + "." + balls_per_overs;

	over_time_line_count = 1;
	while (over_time_line_count <= 13) {
		document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "";
		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#00000000";
		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundImage = "radial-gradient(62% 62%, #00000000, #00000000)";
		over_time_line_count++;
	}
	over_time_line_count = 0;

	save_variables();
}

document.getElementById("official_balls").innerHTML = "official balls" + " - " + official_balls;
document.getElementById("extra_balls").innerHTML = "extra balls" + " - " + extra_balls;
document.getElementById("extra_score").innerHTML = "extra score" + " - " + extra_score;
document.getElementById("all_balls").innerHTML = "all balls" + " - " + all_balls;




function Function_count_plus_wickets() {
	click_count = click_count + 1;
	com = "wicket";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_wickets");
}

function Function_count_minus_wickets() {
	click_count = click_count - 1;
	com = "wicket";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	if (click_count == "0") {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_wickets");
	}
}

function Function_count_reset_wickets() {
	document.getElementById("reset_wickets").style.backgroundColor = "#fff";

	click_count = 0;
	wickets = 0;
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	document.getElementById("count1").innerHTML = mainscore + "/" + wickets;
	change_button_type("false", "complete_button");
	change_button_type("false", "complete_reset");
	change_button_type("false", "minus_wickets");
}


function Function_count_1plus() {
	score_plus_count = score_plus_count + 1;
	com = "one run";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_minus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
}
function Function_count_1minus() {
	if (com == "one run") {
		score_plus_count = score_plus_count - 1;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	}
	if (score_plus_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_minus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
		change_button_type("true", "minus_button_runout");
		change_button_type("true", "minus_button_legbyes");
		change_button_type("true", "minus_button_byes");
		change_button_type("true", "minus_button_wides");
		change_button_type("true", "minus_button_noball");
		change_button_type("true", "minus_button_dotball");
	}
}

function Function_count_4plus() {
	score_plus_count = score_plus_count + 4;
	com = "four";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
}

function Function_count_6plus() {
	score_plus_count = score_plus_count + 6;
	com = "six";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
}

function Function_runout() {
	run_out_count = run_out_count + 1;
	com = "run out";
	click_count = run_out_count;
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_runout_minus");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
}
function Function_runout_minus() {
	if (com == "run out") {
		run_out_count = run_out_count - 1;
		click_count = run_out_count;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;

		if (run_out_count == "0") {
			document.getElementById("plus_wickets").style.backgroundColor = main_1_input_button_color;
		}
	}
	if (run_out_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_runout_minus");
		change_button_type("true", "minus_button_legbyes");
		change_button_type("true", "minus_button_byes");
		change_button_type("true", "minus_button_wides");
		change_button_type("true", "minus_button_noball");
		change_button_type("true", "minus_button_dotball");
		change_button_type("true", "button_plus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
	}
}

function Function_legbyes() {
	score_plus_count = score_plus_count + 1;
	com = "leg byes";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_legbyes_minus");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
}
function Function_legbyes_minus() {
	if (com == "leg byes") {
		score_plus_count = score_plus_count - 1;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	}
	if (score_plus_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_legbyes_minus");
		change_button_type("true", "minus_button_runout");
		change_button_type("true", "minus_button_byes");
		change_button_type("true", "minus_button_wides");
		change_button_type("true", "minus_button_noball");
		change_button_type("true", "minus_button_dotball");
		change_button_type("true", "button_plus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
	}
}

function Function_byes() {
	score_plus_count = score_plus_count + 1;
	com = "byes";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_byes_minus");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
}
function Function_byes_minus() {
	if (com == "byes") {
		score_plus_count = score_plus_count - 1;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	}
	if (score_plus_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_byes_minus");
		change_button_type("true", "minus_button_runout");
		change_button_type("true", "minus_button_legbyes");
		change_button_type("true", "minus_button_wides");
		change_button_type("true", "minus_button_noball");
		change_button_type("true", "minus_button_dotball");
		change_button_type("true", "button_plus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
	}
}

function Function_wides() {
	score_plus_count = score_plus_count + 1;
	com = "wide";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_wides_minus");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
}
function Function_wides_minus() {
	if (com == "wide") {
		score_plus_count = score_plus_count - 1;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	}
	if (score_plus_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_wides_minus");
		change_button_type("true", "minus_button_runout");
		change_button_type("true", "minus_button_legbyes");
		change_button_type("true", "minus_button_byes");
		change_button_type("true", "minus_button_noball");
		change_button_type("true", "minus_button_dotball");
		change_button_type("true", "button_plus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
	}
}

function Function_noball() {
	score_plus_count = score_plus_count + 1;
	com = "no ball";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("true", "minus_button_noball_minus");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");
}
function Function_noball_minus() {
	if (com == "no ball") {
		score_plus_count = score_plus_count - 1;
		document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	}
	if (score_plus_count < 1) {
		change_button_type("false", "complete_button");
		change_button_type("false", "complete_reset");
		change_button_type("false", "minus_button_noball_minus");
		change_button_type("true", "minus_button_runout");
		change_button_type("true", "minus_button_legbyes");
		change_button_type("true", "minus_button_byes");
		change_button_type("true", "minus_button_wides");
		change_button_type("true", "minus_button_dotball");
		change_button_type("true", "button_plus1");
		change_button_type("true", "button_plus4");
		change_button_type("true", "button_plus6");
	}
}

function Function_dotball() {
	com = "dot ball";
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("true", "complete_button");
	change_button_type("true", "complete_reset");
	change_button_type("false", "minus_button_runout");
	change_button_type("false", "minus_button_legbyes");
	change_button_type("false", "minus_button_byes");
	change_button_type("false", "minus_button_wides");
	change_button_type("false", "minus_button_noball");
	change_button_type("false", "minus_button_dotball");
	change_button_type("false", "button_plus1");
	change_button_type("false", "button_plus4");
	change_button_type("false", "button_plus6");

}

change_button_type("false", "complete_button");
change_button_type("false", "complete_reset");
change_button_type("false", "minus_button_runout_minus");
change_button_type("false", "minus_button_legbyes_minus");
change_button_type("false", "minus_button_byes_minus");
change_button_type("false", "minus_button_wides_minus");
change_button_type("false", "minus_button_noball_minus");
change_button_type("false", "minus_button_minus1");
change_button_type("false", "resetbatter1score");
change_button_type("false", "resetbatter2score");
change_button_type("false", "resetbowlerstats");
change_button_type("false", "setplayers");

function change_button_type(type, button) {

	if (button == "complete_button") {
		if (type == "false") {
			document.getElementById("complete").style.backgroundColor = "#6d6d6d";
			document.getElementById("complete").style.cursor = "not-allowed";
			const complete_button = document.getElementById("complete"); complete_button.disabled = true;
		}
		if (type == "true") {
			document.getElementById("complete").style.backgroundColor = "#ff0000";
			document.getElementById("complete").style.cursor = "pointer";
			const complete_button = document.getElementById("complete"); complete_button.disabled = false;
		}
	}

	if (button == "complete_reset") {
		if (type == "false") {
			document.getElementById("complete_reset").style.backgroundColor = "#6d6d6d";
			document.getElementById("complete_reset").style.cursor = "not-allowed";
			const complete_reset = document.getElementById("complete_reset"); complete_reset.disabled = true
		}
		if (type == "true") {
			document.getElementById("complete_reset").style.backgroundColor = "#ffda00";
			document.getElementById("complete_reset").style.cursor = "pointer";
			const complete_reset = document.getElementById("complete_reset"); complete_reset.disabled = false;
		}
	}

	if (button == "minus_wickets") {
		if (type == "false") {
			document.getElementById("minus_wickets").style.backgroundColor = "#6d6d6d";
			document.getElementById("minus_wickets").style.cursor = "not-allowed";
			const minus_wickets = document.getElementById("minus_wickets"); minus_wickets.disabled = true
		}
		if (type == "true") {
			document.getElementById("minus_wickets").style.backgroundColor = main_1_input_button_color;
			document.getElementById("minus_wickets").style.cursor = "pointer";
			const minus_wickets = document.getElementById("minus_wickets"); minus_wickets.disabled = false;
		}
	}

	if (button == "minus_button_runout_minus") {
		if (type == "false") {
			document.getElementById("runout_minus").style.backgroundColor = "#6d6d6d";
			document.getElementById("runout_minus").style.cursor = "not-allowed";
			const minus_button_runout_minus = document.getElementById("runout_minus"); minus_button_runout_minus.disabled = true;
		}
		if (type == "true") {
			document.getElementById("runout_minus").style.backgroundColor = main_1_input_button_color;
			document.getElementById("runout_minus").style.cursor = "pointer";
			const minus_button_runout_minus = document.getElementById("runout_minus"); minus_button_runout_minus.disabled = false;
		}
	}

	if (button == "minus_button_legbyes_minus") {
		if (type == "false") {
			document.getElementById("legbyes_minus").style.backgroundColor = "#6d6d6d";
			document.getElementById("legbyes_minus").style.cursor = "not-allowed";
			const minus_button_legbyes_minus = document.getElementById("legbyes_minus"); minus_button_legbyes_minus.disabled = true;
		}
		if (type == "true") {
			document.getElementById("legbyes_minus").style.backgroundColor = main_1_input_button_color;
			document.getElementById("legbyes_minus").style.cursor = "pointer";
			const minus_button_legbyes_minus = document.getElementById("legbyes_minus"); minus_button_legbyes_minus.disabled = false;
		}
	}

	if (button == "minus_button_byes_minus") {
		if (type == "false") {
			document.getElementById("byes_minus").style.backgroundColor = "#6d6d6d";
			document.getElementById("byes_minus").style.cursor = "not-allowed";
			const minus_button_byes_minus = document.getElementById("byes_minus"); minus_button_byes_minus.disabled = true;
		}
		if (type == "true") {
			document.getElementById("byes_minus").style.backgroundColor = main_1_input_button_color;
			document.getElementById("byes_minus").style.cursor = "pointer";
			const minus_button_byes_minus = document.getElementById("byes_minus"); minus_button_byes_minus.disabled = false;
		}
	}

	if (button == "minus_button_wides_minus") {
		if (type == "false") {
			document.getElementById("wides_minus").style.backgroundColor = "#6d6d6d";
			document.getElementById("wides_minus").style.cursor = "not-allowed";
			const minus_button_wides_minus = document.getElementById("wides_minus"); minus_button_wides_minus.disabled = true;
		}
		if (type == "true") {
			document.getElementById("wides_minus").style.backgroundColor = main_1_input_button_color;
			document.getElementById("wides_minus").style.cursor = "pointer";
			const minus_button_wides_minus = document.getElementById("wides_minus"); minus_button_wides_minus.disabled = false;
		}
	}

	if (button == "minus_button_noball_minus") {
		if (type == "false") {
			document.getElementById("noball_minus").style.backgroundColor = "#6d6d6d";
			document.getElementById("noball_minus").style.cursor = "not-allowed";
			const minus_button_noball_minus = document.getElementById("noball_minus"); minus_button_noball_minus.disabled = true;
		}
		if (type == "true") {
			document.getElementById("noball_minus").style.backgroundColor = main_1_input_button_color;
			document.getElementById("noball_minus").style.cursor = "pointer";
			const minus_button_noball_minus = document.getElementById("noball_minus"); minus_button_noball_minus.disabled = false;
		}
	}

	if (button == "minus_button_runout") {
		if (type == "false") {
			document.getElementById("runout").style.backgroundColor = "#6d6d6d";
			document.getElementById("runout").style.cursor = "not-allowed";
			const minus_button_runout = document.getElementById("runout"); minus_button_runout.disabled = true;
		}
		if (type == "true") {
			document.getElementById("runout").style.backgroundColor = main_1_input_button_color;
			document.getElementById("runout").style.cursor = "pointer";
			const minus_button_runout = document.getElementById("runout"); minus_button_runout.disabled = false;
		}
	}

	if (button == "minus_button_legbyes") {
		if (type == "false") {
			document.getElementById("legbyes").style.backgroundColor = "#6d6d6d";
			document.getElementById("legbyes").style.cursor = "not-allowed";
			const minus_button_legbyes = document.getElementById("legbyes"); minus_button_legbyes.disabled = true;
		}
		if (type == "true") {
			document.getElementById("legbyes").style.backgroundColor = main_1_input_button_color;
			document.getElementById("legbyes").style.cursor = "pointer";
			const minus_button_legbyes = document.getElementById("legbyes"); minus_button_legbyes.disabled = false;
		}
	}

	if (button == "minus_button_byes") {
		if (type == "false") {
			document.getElementById("byes").style.backgroundColor = "#6d6d6d";
			document.getElementById("byes").style.cursor = "not-allowed";
			const minus_button_byes = document.getElementById("byes"); minus_button_byes.disabled = true;
		}
		if (type == "true") {
			document.getElementById("byes").style.backgroundColor = main_1_input_button_color;
			document.getElementById("byes").style.cursor = "pointer";
			const minus_button_byes = document.getElementById("byes"); minus_button_byes.disabled = false;
		}
	}

	if (button == "minus_button_wides") {
		if (type == "false") {
			document.getElementById("wides").style.backgroundColor = "#6d6d6d";
			document.getElementById("wides").style.cursor = "not-allowed";
			const minus_button_wides = document.getElementById("wides"); minus_button_wides.disabled = true;
		}
		if (type == "true") {
			document.getElementById("wides").style.backgroundColor = main_1_input_button_color;
			document.getElementById("wides").style.cursor = "pointer";
			const minus_button_wides = document.getElementById("wides"); minus_button_wides.disabled = false;
		}
	}

	if (button == "minus_button_noball") {
		if (type == "false") {
			document.getElementById("noball").style.backgroundColor = "#6d6d6d";
			document.getElementById("noball").style.cursor = "not-allowed";
			const minus_button_noball = document.getElementById("noball"); minus_button_noball.disabled = true;
		}
		if (type == "true") {
			document.getElementById("noball").style.backgroundColor = main_1_input_button_color;
			document.getElementById("noball").style.cursor = "pointer";
			const minus_button_noball = document.getElementById("noball"); minus_button_noball.disabled = false;
		}
	}

	if (button == "minus_button_dotball") {
		if (type == "false") {
			document.getElementById("dotball").style.backgroundColor = "#6d6d6d";
			document.getElementById("dotball").style.cursor = "not-allowed";
			const minus_button_dotball = document.getElementById("dotball"); minus_button_dotball.disabled = true;
		}
		if (type == "true") {
			document.getElementById("dotball").style.backgroundColor = main_1_input_button_color;
			document.getElementById("dotball").style.cursor = "pointer";
			const minus_button_dotball = document.getElementById("dotball"); minus_button_dotball.disabled = false;
		}
	}

	if (button == "minus_button_minus1") {
		if (type == "false") {
			document.getElementById("minus1").style.backgroundColor = "#6d6d6d";
			document.getElementById("minus1").style.cursor = "not-allowed";
			const minus_button_minus1 = document.getElementById("minus1"); minus_button_minus1.disabled = true;
		}
		if (type == "true") {
			document.getElementById("minus1").style.backgroundColor = main_1_input_button_color;
			document.getElementById("minus1").style.cursor = "pointer";
			const minus_button_minus1 = document.getElementById("minus1"); minus_button_minus1.disabled = false;
		}
	}

	if (button == "button_plus1") {
		if (type == "false") {
			document.getElementById("plus1").style.backgroundColor = "#6d6d6d";
			document.getElementById("plus1").style.cursor = "not-allowed";
			const button_plus1 = document.getElementById("plus1"); button_plus1.disabled = true;
		}
		if (type == "true") {
			document.getElementById("plus1").style.backgroundColor = main_1_input_button_color;
			document.getElementById("plus1").style.cursor = "pointer";
			const button_plus1 = document.getElementById("plus1"); button_plus1.disabled = false;
		}
	}

	if (button == "button_plus4") {
		if (type == "false") {
			document.getElementById("plus4").style.backgroundColor = "#6d6d6d";
			document.getElementById("plus4").style.cursor = "not-allowed";
			const button_plus4 = document.getElementById("plus4"); button_plus4.disabled = true;
		}
		if (type == "true") {
			document.getElementById("plus4").style.backgroundColor = main_1_input_button_color;
			document.getElementById("plus4").style.cursor = "pointer";
			const button_plus4 = document.getElementById("plus4"); button_plus4.disabled = false;
		}
	}

	if (button == "button_plus6") {
		if (type == "false") {
			document.getElementById("plus6").style.backgroundColor = "#6d6d6d";
			document.getElementById("plus6").style.cursor = "not-allowed";
			const button_plus6 = document.getElementById("plus6"); button_plus6.disabled = true;
		}
		if (type == "true") {
			document.getElementById("plus6").style.backgroundColor = main_1_input_button_color;
			document.getElementById("plus6").style.cursor = "pointer";
			const button_plus6 = document.getElementById("plus6"); button_plus6.disabled = false;
		}
	}

	if (button == "resetbatter1score") {
		if (type == "false") {
			document.getElementById("resetbatter1score").style.backgroundColor = "#6d6d6d";
			document.getElementById("resetbatter1score").style.cursor = "not-allowed";
			const resetbatter1score = document.getElementById("resetbatter1score"); resetbatter1score.disabled = true;
		}
		if (type == "true") {
			document.getElementById("resetbatter1score").style.backgroundColor = "#fff";
			document.getElementById("resetbatter1score").style.cursor = "pointer";
			const resetbatter1score = document.getElementById("resetbatter1score"); resetbatter1score.disabled = false;
		}
	}

	if (button == "resetbatter2score") {
		if (type == "false") {
			document.getElementById("resetbatter2score").style.backgroundColor = "#6d6d6d";
			document.getElementById("resetbatter2score").style.cursor = "not-allowed";
			const resetbatter2score = document.getElementById("resetbatter2score"); resetbatter2score.disabled = true;
		}
		if (type == "true") {
			document.getElementById("resetbatter2score").style.backgroundColor = "#fff";
			document.getElementById("resetbatter2score").style.cursor = "pointer";
			const resetbatter2score = document.getElementById("resetbatter2score"); resetbatter2score.disabled = false;
		}
	}

	if (button == "resetbowlerstats") {
		if (type == "false") {
			document.getElementById("resetbowlerstats").style.backgroundColor = "#6d6d6d";
			document.getElementById("resetbowlerstats").style.cursor = "not-allowed";
			const resetbowlerstats = document.getElementById("resetbowlerstats"); resetbowlerstats.disabled = true;
		}
		if (type == "true") {
			document.getElementById("resetbowlerstats").style.backgroundColor = "#fff";
			document.getElementById("resetbowlerstats").style.cursor = "pointer";
			const resetbowlerstats = document.getElementById("resetbowlerstats"); resetbowlerstats.disabled = false;
		}
	}

	if (button == "setplayers") {
		if (type == "false") {
			document.getElementById("setplayers").style.backgroundColor = "#6d6d6d";
			document.getElementById("setplayers").style.cursor = "not-allowed";
			const setplayers = document.getElementById("setplayers"); setplayers.disabled = true;
		}
		if (type == "true") {
			document.getElementById("setplayers").style.backgroundColor = "#fff";
			document.getElementById("setplayers").style.cursor = "pointer";
			const setplayers = document.getElementById("setplayers"); setplayers.disabled = false;
		}
	}
}

let over_time_line_count = 0;

function Function_complete() {

	change_button_type("false", "complete_button");
	change_button_type("false", "complete_reset");
	change_button_type("false", "minus_button_runout_minus");
	change_button_type("false", "minus_button_legbyes_minus");
	change_button_type("false", "minus_button_byes_minus");
	change_button_type("false", "minus_button_wides_minus");
	change_button_type("false", "minus_button_noball_minus");
	change_button_type("true", "minus_button_runout");
	change_button_type("true", "minus_button_legbyes");
	change_button_type("true", "minus_button_byes");
	change_button_type("true", "minus_button_wides");
	change_button_type("true", "minus_button_noball");
	change_button_type("true", "minus_button_dotball");
	change_button_type("false", "minus_button_minus1");
	change_button_type("true", "button_plus1");
	change_button_type("true", "button_plus4");
	change_button_type("true", "button_plus6");
	change_button_type("false", "minus_wickets");

	var bowler = document.getElementById("selectbowler_name").value;
	bowler_stats_score = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_score"));
	bowler_stats_wickets = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_wickets"));
	bowler_stats_overs = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_overs"));
	bowler_stats_balls_per_overs = JSON.parse(localStorage.getItem(bowler + " = bowler_stats_balls_per_overs"));

	if (bowler_stats_score == null) {
		bowler_stats_score = 0;
	}
	if (bowler_stats_wickets == null) {
		bowler_stats_wickets = 0;
	}
	if (bowler_stats_overs == null) {
		bowler_stats_overs = 0;
	}
	if (bowler_stats_balls_per_overs == null) {
		bowler_stats_balls_per_overs = 0;
	}

	if (com == "wicket") {
		if (click_count > 0) {
			wickets = wickets + click_count;
			document.getElementById("count1").innerHTML = mainscore + "/" + wickets;

			bowler_stats_wickets = bowler_stats_wickets + click_count;

			//var x = document.getElementById("switchbat").checked;
			if (switch_bat_pos == "top") {
				document.getElementById("selectbat1").style.backgroundColor = "#ff0000";
			}
			else {
				document.getElementById("selectbat2").style.backgroundColor = "#ff0000";
			}

			over_time_line_count = over_time_line_count + 1;

			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			if (auto_toggle_out_display == true) {
				Function_out();
				setTimeout(function () { Function_out(); }, 2000);
			}

			if (click_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "W" + click_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "W";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "one run") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			mainscore = mainscore + score_plus_count;
			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			document.getElementById("over_time_line_" + over_time_line_count).innerHTML = score_plus_count;
			document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
			document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
		}
	}

	if (com == "four") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			mainscore = mainscore + score_plus_count;
			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			document.getElementById("over_time_line_" + over_time_line_count).innerHTML = score_plus_count;
			document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
			document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
		}
	}

	if (com == "six") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			mainscore = mainscore + score_plus_count;
			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			document.getElementById("over_time_line_" + over_time_line_count).innerHTML = score_plus_count;
			document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
			document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
		}
	}

	if (com == "run out") {
		if (run_out_count > 0) {
			wickets = wickets + run_out_count;
			document.getElementById("count1").innerHTML = mainscore + "/" + wickets;

			bowler_stats_wickets = bowler_stats_wickets + run_out_count;

			//var x = document.getElementById("switchbat").checked;
			if (switch_bat_pos == "top") {
				document.getElementById("selectbat1").style.backgroundColor = "#ff0000";
			}
			else {
				document.getElementById("selectbat2").style.backgroundColor = "#ff0000";
			}

			over_time_line_count = over_time_line_count + 1;

			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			if (auto_toggle_out_display == true) {
				Function_out();
				setTimeout(function () { Function_out(); }, 2000);
			}


			if (run_out_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "RO <br>" + run_out_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
				document.getElementById("over_time_line_" + over_time_line_count).style.lineHeight = "14.5px";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "RO";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "leg byes") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			extra_score = extra_score + score_plus_count;
			mainscore = mainscore + score_plus_count;
			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			if (score_plus_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "LB <br>" + score_plus_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
				document.getElementById("over_time_line_" + over_time_line_count).style.lineHeight = "14.5px";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "LB";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "byes") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			extra_score = extra_score + score_plus_count;
			mainscore = mainscore + score_plus_count;
			official_balls = official_balls + 1;
			balls_per_overs = balls_per_overs + 1;
			bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			if (score_plus_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "B <br>" + score_plus_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
				document.getElementById("over_time_line_" + over_time_line_count).style.lineHeight = "14.5px";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "B";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "wide") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			extra_score = extra_score + score_plus_count;
			mainscore = mainscore + score_plus_count;
			extra_balls = extra_balls + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			if (score_plus_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "WD <br>" + score_plus_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
				document.getElementById("over_time_line_" + over_time_line_count).style.lineHeight = "14.5px";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "WD";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "no ball") {
		if (score_plus_count > 0) {
			over_time_line_count = over_time_line_count + 1;

			extra_score = extra_score + score_plus_count;
			mainscore = mainscore + score_plus_count;
			extra_balls = extra_balls + 1;

			bowler_stats_score = bowler_stats_score + score_plus_count;

			if (score_plus_count > 1) {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "NO <br>" + score_plus_count;
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
				document.getElementById("over_time_line_" + over_time_line_count).style.lineHeight = "14.5px";
			}
			else {
				document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "NO";
				document.getElementById("over_time_line_" + over_time_line_count).style.color = "#ff0000";
				document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#0000b4";
			}
		}
	}

	if (com == "dot ball") {
		over_time_line_count = over_time_line_count + 1;

		official_balls = official_balls + 1;
		balls_per_overs = balls_per_overs + 1;
		bowler_stats_balls_per_overs = bowler_stats_balls_per_overs + 1;

		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundImage = "radial-gradient(62% 62%, #0000b4 8px, #ffffff 9px , #ffffff 12px, #0000b4 13px)";
		document.getElementById("over_time_line_" + over_time_line_count).style.color = "#fff";
		document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#00000000";
	}


	//----------------------------------------------------------------------------------

	document.getElementById("count1").innerHTML = mainscore + "/" + wickets;
	document.getElementById("official_balls").innerHTML = "official balls" + " - " + official_balls;
	document.getElementById("extra_balls").innerHTML = "extra balls" + " - " + extra_balls;
	document.getElementById("extra_score").innerHTML = "extra score" + " - " + extra_score;
	all_balls = official_balls + extra_balls;
	document.getElementById("all_balls").innerHTML = "all balls" + " - " + all_balls;
	document.getElementById("over").innerHTML = overs + "." + balls_per_overs;




	var checkover = official_balls / 6;
	if (Number.isInteger(checkover) && checkover !== 0 && com !== "wide" && com !== "no ball") {

		if (auto_chenge_over_count == true) {
			document.getElementById("overplus1").style.backgroundColor = "#ff0000";

			setTimeout(function () {
				balls_per_overs = 0;
				bowler_stats_balls_per_overs = 0;
				overs = overs + 1;
				bowler_stats_overs = bowler_stats_overs + 1;
				runrate = mainscore / overs;
				runratedisp = runrate;
				runratedisp = runratedisp.toFixed(2);
				document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;
				document.getElementById("over").innerHTML = overs + "." + balls_per_overs;
				document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";

				if (overs == 1) {
					document.getElementById("toggle_run_rate").style.backgroundColor = "#ff0000";
				}

				over_time_line_count = 1;
				while (over_time_line_count <= 13) {
					document.getElementById("over_time_line_" + over_time_line_count).innerHTML = "";
					document.getElementById("over_time_line_" + over_time_line_count).style.backgroundColor = "#00000000";
					document.getElementById("over_time_line_" + over_time_line_count).style.backgroundImage = "radial-gradient(62% 62%, #00000000, #00000000)";
					over_time_line_count++;
				}
				Function_save_bowler_stats();
				over_time_line_count = 0;
				//document.getElementById("time_line_count").innerHTML = over_time_line_count;
			}, 2000);




			setTimeout(function () { document.getElementById("overplus1").style.backgroundColor = main_1_input_button_color; }, 500);


		}
		else {
			document.getElementById("overplus1").style.backgroundColor = "#ff0000";
		}
	}



	if (com == "one run" | com == "four" | com == "six" | com == "run out" | com == "leg byes" | com == "byes" | com == "dot ball" | com == "wicket") {

		//var z = document.getElementById("switchbat").checked;
		if (switch_bat_pos == "top") {
			bater_top_score = bater_top_score + score_plus_count;
			bater_top_ballno = bater_top_ballno + 1;
			document.getElementById("bater_top_score").innerHTML = bater_top_score + "(" + bater_top_ballno + ")";
		}

		else {
			bater_bottom_score = bater_bottom_score + score_plus_count;
			bater_bottom_ballno = bater_bottom_ballno + 1;
			document.getElementById("bater_bottom_score").innerHTML = bater_bottom_score + "(" + bater_bottom_ballno + ")";
		}
	}

	Function_save_bowler_stats();
	document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";
	score_plus_count = 0;
	run_out_count = 0;
	com = "";
	click_count = 0;

	//document.getElementById("time_line_count").innerHTML = over_time_line_count;
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;

	save_variables();

	update_web();
}


function Function_complete_reset() {
	score_plus_count = 0;
	run_out_count = 0;
	com = "";
	click_count = 0;
	document.getElementById("complete_ball_count").innerHTML = score_plus_count + " / " + click_count;
	change_button_type("false", "complete_button");
	change_button_type("false", "complete_reset");
	change_button_type("false", "minus_button_runout_minus");
	change_button_type("false", "minus_button_legbyes_minus");
	change_button_type("false", "minus_button_byes_minus");
	change_button_type("false", "minus_button_wides_minus");
	change_button_type("false", "minus_button_noball_minus");
	change_button_type("true", "minus_button_runout");
	change_button_type("true", "minus_button_legbyes");
	change_button_type("true", "minus_button_byes");
	change_button_type("true", "minus_button_wides");
	change_button_type("true", "minus_button_noball");
	change_button_type("true", "minus_button_dotball");
	change_button_type("false", "minus_button_minus1");
	change_button_type("true", "button_plus1");
	change_button_type("true", "button_plus4");
	change_button_type("true", "button_plus6");
	change_button_type("false", "minus_wickets");
}


/////////////////////////////////////////



function Function_batter1_resetscore() {
	bater_top_score = 0
	bater_top_ballno = 0
	document.getElementById("bater_top_score").innerHTML = bater_top_score + "(" + bater_top_ballno + ")";
	document.getElementById("resetbatter1score").style.backgroundColor = "#fff";

	if (bater1_disp !== bater1 && bater_top_score == 0 && bater_top_ballno == 0) {
		change_button_type("false", "resetbatter1score");
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}
}

function Function_batter2_resetscore() {
	bater_bottom_score = 0
	bater_bottom_ballno = 0
	document.getElementById("bater_bottom_score").innerHTML = bater_bottom_score + "(" + bater_bottom_ballno + ")";
	document.getElementById("resetbatter2score").style.backgroundColor = "#fff";

	if (bater2_disp !== bater2 && bater_bottom_score == 0 && bater_bottom_ballno == 0) {
		change_button_type("false", "resetbatter2score");
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}
}

function Function_reset_bowler_stats() {
	bowler_stats_score = 0;
	bowler_stats_wickets = 0;
	bowler_stats_overs = 0;
	bowler_stats_balls_per_overs = 0;
	document.getElementById("bowler_stats").innerHTML = bowler_stats_score + "/" + bowler_stats_wickets + " (" + bowler_stats_overs + "." + bowler_stats_balls_per_overs + ")";

	if (bowler_disp !== bowler && bowler_stats_score == 0 && bowler_stats_wickets == 0 && bowler_stats_overs == 0 && bowler_stats_balls_per_overs == 0) {
		change_button_type("false", "resetbowlerstats");
		change_button_type("true", "setplayers");
		document.getElementById("setplayers").style.backgroundColor = "#ff0000";
	}
}


function Function_count_resetmainscore() {
	mainscore = 0;
	runrate = mainscore / overs;
	official_balls = 0;
	extra_balls = 0;
	extra_score = 0;
	runrate = 0;

	document.getElementById("count1").innerHTML = mainscore + "/" + wickets;
	document.getElementById("official_balls").innerHTML = "official balls" + " - " + official_balls;
	document.getElementById("extra_balls").innerHTML = "extra balls" + " - " + extra_balls;
	document.getElementById("extra_score").innerHTML = "extra score" + " - " + extra_score;
	all_balls = official_balls + extra_balls;
	document.getElementById("all_balls").innerHTML = "all balls" + " - " + all_balls;
	document.getElementById("run_rate").innerHTML = "RUN RATE " + runrate;

	if (bater_top_score !== 0 || bater_top_ballno !== 0) {
		change_button_type("true", "resetbatter1score");
		document.getElementById("resetbatter1score").style.backgroundColor = "#ff0000";
	}

	if (bater_bottom_score !== 0 || bater_bottom_ballno !== 0) {
		change_button_type("true", "resetbatter2score");
		document.getElementById("resetbatter2score").style.backgroundColor = "#ff0000";
	}

	document.getElementById("overreset").style.backgroundColor = "#ff0000";
	document.getElementById("reset_wickets").style.backgroundColor = "#ff0000";

	update_web();
}


document.getElementById("minus_wickets").style.backgroundColor = "#6d6d6d";
document.getElementById("minus_wickets").style.cursor = "not-allowed";
const minus_wickets = document.getElementById("minus_wickets"); minus_wickets.disabled = true;


document.getElementById("pinter_bottom").innerHTML = ">";
let Function_switch_bat_stete = true;
let switch_bat_pos = "bottom";
function Function_switch_bat() {
	if (Function_switch_bat_stete == true) {//switch on
		//document.getElementById("pinter_top").innerHTML = ">";
		//document.getElementById("pinter_bottom").innerHTML = "";
		document.getElementById("pinter_top").src = "images/triangle.svg";
		document.getElementById("pinter_bottom").src = "";
		switch_bat_pos = "top";
	}

	else if (Function_switch_bat_stete == false) {//switch 0ff
		//document.getElementById("pinter_top").innerHTML = "";
		//document.getElementById("pinter_bottom").innerHTML = ">";
		document.getElementById("pinter_top").src = "";
		document.getElementById("pinter_bottom").src = "images/triangle.svg";
		switch_bat_pos = "bottom";
	}
	Function_switch_bat_stete = !Function_switch_bat_stete;
}

runratedisp = runrate;
runratedisp = runratedisp.toFixed(2);
document.getElementById("run_rate").innerHTML = "RUN RATE " + runratedisp;



/*
let elmnt = document.getElementById("score_controls_left");elmnt.scrollIntoView(true);
let elmnt = document.getElementById("score_controls_middle");elmnt.scrollIntoView(true);
let elmnt = document.getElementById("score_controls_right");elmnt.scrollIntoView(true);
*/


function startup_load() {
	let elmnt = document.getElementById("score_controls_middle");
	elmnt.scrollIntoView(true);
}


document.addEventListener('keydown', function (event) {
	let kc = event.keyCode;
	switch (kc) {
		case 65:
			change_score_controls("score_controls_left");
			break;

		case 83:
			change_score_controls("score_controls_middle");
			break;

		case 68:
			change_score_controls("score_controls_right");
	}
});

function change_score_controls(area) {
	let elmnt = document.getElementById(area); elmnt.scrollIntoView(true);
}


let w_stete = true;
document.addEventListener('keydown', function (event) {
	if (event.keyCode == 87) {
		document.getElementById("score_board_top_wrap").style.zIndex = "0";
		document.getElementById("score_board_top_wrap").style.opacity = "1";
		document.getElementById("score_board_setting").style.opacity = "1";

		if (w_stete == false) {
			document.getElementById("score_board_top_wrap").style.zIndex = "-1";
			document.getElementById("score_board_top_wrap").style.opacity = "0";
			document.getElementById("score_board_setting").style.opacity = "0";
		}
		w_stete = !w_stete;
	}
});
function Function_close_settings() {
	document.getElementById("score_board_top_wrap").style.zIndex = "-1";
	document.getElementById("score_board_top_wrap").style.opacity = "0";
	document.getElementById("score_board_setting").style.opacity = "0";
	w_stete = !w_stete;
}


let out_stete = true;
function Function_out() {
	document.getElementById("out_free_hit").style.backgroundColor = "#ff0000";
	document.getElementById("out_free_hit").style.color = "#fff";
	document.getElementById("out_free_hit").innerHTML = "OUT";
	document.getElementById("free_hit").style.backgroundColor = "#6d6d6d";
	document.getElementById("free_hit").style.cursor = "not-allowed";
	const minus_button_minus1 = document.getElementById("free_hit"); minus_button_minus1.disabled = true;

	if (out_stete == false) {
		document.getElementById("out_free_hit").style.backgroundColor = "#00000000";
		document.getElementById("out_free_hit").style.color = "#00000000";
		document.getElementById("out_free_hit").innerHTML = "OUT";
		document.getElementById("free_hit").style.backgroundColor = main_2_input_button_color;
		document.getElementById("free_hit").style.cursor = "pointer";
		const minus_button_minus1 = document.getElementById("free_hit"); minus_button_minus1.disabled = false;
	}
	out_stete = !out_stete;
}

let free_hit_stete = true;
function Function_free_hit() {
	document.getElementById("out_free_hit").style.backgroundColor = "#4500ff";
	document.getElementById("out_free_hit").style.color = "#fff";
	document.getElementById("out_free_hit").innerHTML = "FREE HIT";
	document.getElementById("out").style.backgroundColor = "#6d6d6d";
	document.getElementById("out").style.cursor = "not-allowed";
	const minus_button_minus1 = document.getElementById("out"); minus_button_minus1.disabled = true;

	if (free_hit_stete == false) {
		document.getElementById("out_free_hit").style.backgroundColor = "#00000000";
		document.getElementById("out_free_hit").style.color = "#00000000";
		document.getElementById("out_free_hit").innerHTML = "FREE HIT";

		if (auto_toggle_out_display == false) {
			document.getElementById("out").style.backgroundColor = main_2_input_button_color;
			document.getElementById("out").style.cursor = "pointer";
			const minus_button_minus1 = document.getElementById("out"); minus_button_minus1.disabled = false;
		}
	}
	free_hit_stete = !free_hit_stete;
}

let Function_toggle_score_board_stete = true;
function Function_toggle_score_board() {
	document.getElementById("score_board_toggle_wrap").style.opacity = "1";

	if (Function_toggle_score_board_stete == false) {
		document.getElementById("score_board_toggle_wrap").style.opacity = "0";
	}
	Function_toggle_score_board_stete = !Function_toggle_score_board_stete;
}

let Function_toggle_run_rate_stete = true;
function Function_toggle_run_rate() {
	document.getElementById("toggle_run_rate").style.backgroundColor = "#fff";
	document.getElementById("run_rate").style.color = "#000";

	if (Function_toggle_run_rate_stete == false) {
		document.getElementById("run_rate").style.color = "#00000000";
	}
	Function_toggle_run_rate_stete = !Function_toggle_run_rate_stete;
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function save_variables() {
	team1_logo = document.getElementById("Team1_logo").value;
	team2_logo = document.getElementById("Team2_logo").value;

	team1 = document.getElementById("Team1Name").value;
	team2 = document.getElementById("Team2Name").value;

	Team1player1inputVal = document.getElementById("Team1player1").value;
	Team1player2inputVal = document.getElementById("Team1player2").value;
	Team1player3inputVal = document.getElementById("Team1player3").value;
	Team1player4inputVal = document.getElementById("Team1player4").value;
	Team1player5inputVal = document.getElementById("Team1player5").value;
	Team1player6inputVal = document.getElementById("Team1player6").value;
	Team1player7inputVal = document.getElementById("Team1player7").value;
	Team1player8inputVal = document.getElementById("Team1player8").value;
	Team1player9inputVal = document.getElementById("Team1player9").value;
	Team1player10inputVal = document.getElementById("Team1player10").value;
	Team1player11inputVal = document.getElementById("Team1player11").value;

	Team2player1inputVal = document.getElementById("Team2player1").value;
	Team2player2inputVal = document.getElementById("Team2player2").value;
	Team2player3inputVal = document.getElementById("Team2player3").value;
	Team2player4inputVal = document.getElementById("Team2player4").value;
	Team2player5inputVal = document.getElementById("Team2player5").value;
	Team2player6inputVal = document.getElementById("Team2player6").value;
	Team2player7inputVal = document.getElementById("Team2player7").value;
	Team2player8inputVal = document.getElementById("Team2player8").value;
	Team2player9inputVal = document.getElementById("Team2player9").value;
	Team2player10inputVal = document.getElementById("Team2player10").value;
	Team2player11inputVal = document.getElementById("Team2player11").value;

	//--------------------------------------------------------------

	localStorage.setItem("team1_logo_save", team1_logo);
	localStorage.setItem("team2_logo_save", team2_logo);

	localStorage.setItem("Team1Name_save", team1);
	localStorage.setItem("Team2Name_save", team2);

	localStorage.setItem("Team1player1inputVal_save", Team1player1inputVal);
	localStorage.setItem("Team1player2inputVal_save", Team1player2inputVal);
	localStorage.setItem("Team1player3inputVal_save", Team1player3inputVal);
	localStorage.setItem("Team1player4inputVal_save", Team1player4inputVal);
	localStorage.setItem("Team1player5inputVal_save", Team1player5inputVal);
	localStorage.setItem("Team1player6inputVal_save", Team1player6inputVal);
	localStorage.setItem("Team1player7inputVal_save", Team1player7inputVal);
	localStorage.setItem("Team1player8inputVal_save", Team1player8inputVal);
	localStorage.setItem("Team1player9inputVal_save", Team1player9inputVal);
	localStorage.setItem("Team1player10inputVal_save", Team1player10inputVal);
	localStorage.setItem("Team1player11inputVal_save", Team1player11inputVal);

	localStorage.setItem("Team2player1inputVal_save", Team2player1inputVal);
	localStorage.setItem("Team2player2inputVal_save", Team2player2inputVal);
	localStorage.setItem("Team2player3inputVal_save", Team2player3inputVal);
	localStorage.setItem("Team2player4inputVal_save", Team2player4inputVal);
	localStorage.setItem("Team2player5inputVal_save", Team2player5inputVal);
	localStorage.setItem("Team2player6inputVal_save", Team2player6inputVal);
	localStorage.setItem("Team2player7inputVal_save", Team2player7inputVal);
	localStorage.setItem("Team2player8inputVal_save", Team2player8inputVal);
	localStorage.setItem("Team2player9inputVal_save", Team2player9inputVal);
	localStorage.setItem("Team2player10inputVal_save", Team2player10inputVal);
	localStorage.setItem("Team2player11inputVal_save", Team2player11inputVal);

}



document.documentElement.style.setProperty('--main_1_input_button_color', main_1_input_button_color);
document.documentElement.style.setProperty('--main_2_input_button_color', main_2_input_button_color);
document.documentElement.style.setProperty('--main_3_input_button_color', main_3_input_button_color);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


document.getElementById("setting_score_controls_interface").style.zIndex = "0";
document.getElementById("setting_title_3").style.zIndex = "0";
document.getElementById("setting_title_4").style.zIndex = "0";
document.getElementById("setting_title_5").style.zIndex = "0";
document.getElementById("setting_score_board_interface").style.zIndex = "1";


let settings_tab_switch_speed = 100;
let setting_transition_speed = 0.4;
let s_s_b_pos = "2";

setting_score_board_interface_click();
s_s_b_pos = "1";

function setting_score_board_interface_click() {
	if (s_s_b_pos == "2" || s_s_b_pos == "3" || s_s_b_pos == "4" || s_s_b_pos == "5") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "-70%";

			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_score_board_interface").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "1";
		}, 1);
	}
}

function setting_score_controls_interface_click() {
	if (s_s_b_pos == "3" || s_s_b_pos == "4" || s_s_b_pos == "5") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "-70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_score_controls_interface").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "2";
		}, 1);
	}

	if (s_s_b_pos == "1") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "-70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_score_controls_interface").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "2";
		}, 1);
	}
}

function navbar_title_3() {
	if (s_s_b_pos == "4" || s_s_b_pos == "5") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "-70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_title_3").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "3";
		}, 1);
	}

	if (s_s_b_pos == "1" || s_s_b_pos == "2") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "-70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_title_3").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "3";
		}, 1);
	}
}

function navbar_title_4() {
	if (s_s_b_pos == "5") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "-70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_title_4").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "4";
		}, 1);
	}

	if (s_s_b_pos == "1" || s_s_b_pos == "2" || s_s_b_pos == "3") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "-70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_5").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_title_4").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#101010";
				document.getElementById("navbar_title_5").style.backgroundColor = "#00000000";
			}, settings_tab_switch_speed);

			s_s_b_pos = "4";
		}, 1);
	}
}

function navbar_title_5() {
	if (s_s_b_pos == "1" || s_s_b_pos == "2" || s_s_b_pos == "3" || s_s_b_pos == "4") {

		document.getElementById("setting_transition").style.zIndex = "1";
		document.getElementById("setting_transition").style.opacity = "0";
		document.getElementById("setting_transition").style.transition = "0s";
		document.getElementById("setting_transition").style.left = "-70%";

		setTimeout(function () {
			document.getElementById("setting_transition").style.transition = setting_transition_speed + "s";
			document.getElementById("setting_transition").style.opacity = "1";
			document.getElementById("setting_transition").style.left = "70%";

			document.getElementById("setting_score_board_interface").style.zIndex = "0";
			document.getElementById("setting_score_controls_interface").style.zIndex = "0";
			document.getElementById("setting_title_3").style.zIndex = "0";
			document.getElementById("setting_title_4").style.zIndex = "0";

			setTimeout(function () {
				document.getElementById("setting_title_5").style.zIndex = "1";
				document.getElementById("setting_transition").style.zIndex = "0";
				document.getElementById("setting_transition").style.opacity = "0";

				document.getElementById("navbar_title_1").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_2").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_3").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_4").style.backgroundColor = "#00000000";
				document.getElementById("navbar_title_5").style.backgroundColor = "#101010";
			}, settings_tab_switch_speed);

			s_s_b_pos = "5";
		}, 1);
	}
}

//----------------------------------------------------------------


//...............

let Function_switch_chroma_key_background_stete;
Function_switch_chroma_key_background_stete = JSON.parse(localStorage.getItem("Function_switch_chroma_key_background_stete_LS"));
if (Function_switch_chroma_key_background_stete == null) {
	Function_switch_chroma_key_background_stete = false;
}
Function_switch_chroma_key_background();
function Function_switch_chroma_key_background() {
	if (Function_switch_chroma_key_background_stete == true) {//switch on
		document.getElementById("switch_toggle_chroma_key_background").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_chroma_key_background").style.width = "40%";
			document.getElementById("switch_toggle_chroma_key_background").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_switch_chroma_key_background_stete_LS", true);

		document.getElementById("switch_chroma_key_background").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_chroma_key_background").style.backgroundColor = "#fff";
		document.getElementById("score_board_wrap").style.backgroundColor = "#00ff00";
		document.getElementById("score_board_capture_guide_lines").style.borderColor = "#000";
	}

	else if (Function_switch_chroma_key_background_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_chroma_key_background").style.left = "4px";
		document.getElementById("switch_toggle_chroma_key_background").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_chroma_key_background").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_switch_chroma_key_background_stete_LS", false);

		document.getElementById("switch_chroma_key_background").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_chroma_key_background").style.backgroundColor = "#ababab";
		document.getElementById("score_board_wrap").style.backgroundColor = "#000";
		document.getElementById("score_board_capture_guide_lines").style.borderColor = "#fff";
	}
	Function_switch_chroma_key_background_stete = !Function_switch_chroma_key_background_stete;
}


let Function_switch_capture_guide_stete;
Function_switch_capture_guide_stete = JSON.parse(localStorage.getItem("Function_switch_capture_guide_stete_LS"));
if (Function_switch_capture_guide_stete == null) {
	Function_switch_capture_guide_stete = false;
}
Function_switch_capture_guide();
function Function_switch_capture_guide() {

	if (Function_switch_capture_guide_stete == true) {//switch on
		document.getElementById("switch_toggle_capture_guide").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_capture_guide").style.width = "40%";
			document.getElementById("switch_toggle_capture_guide").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_switch_capture_guide_stete_LS", true);

		document.getElementById("switch_capture_guide").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_capture_guide").style.backgroundColor = "#fff";
		document.getElementById("score_board_capture_guide_lines").style.borderWidth = "3.5px";
		document.getElementById("score_board_capture_guide_lines").style.borderStyle = "dashed";
	}

	else if (Function_switch_capture_guide_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_capture_guide").style.left = "4px";
		document.getElementById("switch_toggle_capture_guide").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_capture_guide").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_switch_capture_guide_stete_LS", false);

		document.getElementById("switch_capture_guide").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_capture_guide").style.backgroundColor = "#ababab";
		document.getElementById("score_board_capture_guide_lines").style.borderWidth = "0px";
		document.getElementById("score_board_capture_guide_lines").style.borderStyle = "double";
	}
	Function_switch_capture_guide_stete = !Function_switch_capture_guide_stete;
}


let Function_hide_cursor_on_score_board_stete;
Function_hide_cursor_on_score_board_stete = JSON.parse(localStorage.getItem("Function_hide_cursor_on_score_board_stete_LS"));
if (Function_hide_cursor_on_score_board_stete == null) {
	Function_hide_cursor_on_score_board_stete = false;
}
Function_hide_cursor_on_score_board();
function Function_hide_cursor_on_score_board() {
	if (Function_hide_cursor_on_score_board_stete == true) {//switch on
		document.getElementById("switch_toggle_hide_cursor_on_score_board").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_hide_cursor_on_score_board").style.width = "40%";
			document.getElementById("switch_toggle_hide_cursor_on_score_board").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_hide_cursor_on_score_board_stete_LS", true);

		document.getElementById("switch_hide_cursor_on_score_board").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_hide_cursor_on_score_board").style.backgroundColor = "#fff";
		document.getElementById("score_board_toggle_wrap").style.cursor = "none";
	}

	else if (Function_hide_cursor_on_score_board_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_hide_cursor_on_score_board").style.left = "4px";
		document.getElementById("switch_toggle_hide_cursor_on_score_board").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_hide_cursor_on_score_board").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_hide_cursor_on_score_board_stete_LS", false);

		document.getElementById("switch_hide_cursor_on_score_board").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_hide_cursor_on_score_board").style.backgroundColor = "#ababab";
		document.getElementById("score_board_toggle_wrap").style.cursor = "auto";
	}
	Function_hide_cursor_on_score_board_stete = !Function_hide_cursor_on_score_board_stete;
}

//...............


//...............

let Function_switch_highlighted_buttons_stete;
Function_switch_highlighted_buttons_stete = JSON.parse(localStorage.getItem("Function_switch_highlighted_buttons_stete_LS"));
if (Function_switch_highlighted_buttons_stete == null) {
	Function_switch_highlighted_buttons_stete = true;
}
Function_switch_highlighted_buttons();
function Function_switch_highlighted_buttons() {
	if (Function_switch_highlighted_buttons_stete == true) {//switch on
		document.getElementById("switch_toggle_highlighted_buttons").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_highlighted_buttons").style.width = "40%";
			document.getElementById("switch_toggle_highlighted_buttons").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_switch_highlighted_buttons_stete_LS", true);

		document.getElementById("switch_highlighted_buttons").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_highlighted_buttons").style.backgroundColor = "#fff";
		main_1_input_button_color = "#1ba5ff";
		main_2_input_button_color = "#c527ff";
		main_3_input_button_color = "#ff6500";
		change_highlighted_buttons_color();
	}

	else if (Function_switch_highlighted_buttons_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_highlighted_buttons").style.left = "4px";
		document.getElementById("switch_toggle_highlighted_buttons").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_highlighted_buttons").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_switch_highlighted_buttons_stete_LS", false);

		document.getElementById("switch_highlighted_buttons").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_highlighted_buttons").style.backgroundColor = "#ababab";
		main_1_input_button_color = "#fff";
		main_2_input_button_color = "#fff";
		main_3_input_button_color = "#fff";
		change_highlighted_buttons_color();
	}
	Function_switch_highlighted_buttons_stete = !Function_switch_highlighted_buttons_stete;
}
function change_highlighted_buttons_color() {
	document.getElementById("plus1").style.backgroundColor = main_1_input_button_color;
	document.getElementById("plus4").style.backgroundColor = main_1_input_button_color;
	document.getElementById("plus6").style.backgroundColor = main_1_input_button_color;
	document.getElementById("dotball").style.backgroundColor = main_1_input_button_color;
	document.getElementById("runout").style.backgroundColor = main_1_input_button_color;
	document.getElementById("legbyes").style.backgroundColor = main_1_input_button_color;
	document.getElementById("byes").style.backgroundColor = main_1_input_button_color;
	document.getElementById("wides").style.backgroundColor = main_1_input_button_color;
	document.getElementById("noball").style.backgroundColor = main_1_input_button_color;
	document.getElementById("plus_wickets").style.backgroundColor = main_1_input_button_color;
	document.getElementById("overplus1").style.backgroundColor = main_1_input_button_color;

	document.getElementById("out").style.backgroundColor = main_2_input_button_color;
	document.getElementById("free_hit").style.backgroundColor = main_2_input_button_color;

	document.getElementById("switch_bat").style.backgroundColor = main_3_input_button_color;
}


let Function_auto_chenge_over_count_stete;
Function_auto_chenge_over_count_stete = JSON.parse(localStorage.getItem("Function_auto_chenge_over_count_stete_LS"));
if (Function_auto_chenge_over_count_stete == null) {
	Function_auto_chenge_over_count_stete = false;
}
Function_auto_chenge_over_count();
function Function_auto_chenge_over_count() {
	if (Function_auto_chenge_over_count_stete == true) {//switch on
		document.getElementById("switch_toggle_auto_chenge_over_count").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_auto_chenge_over_count").style.width = "40%";
			document.getElementById("switch_toggle_auto_chenge_over_count").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_auto_chenge_over_count_stete_LS", true);

		document.getElementById("switch_auto_chenge_over_count").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_auto_chenge_over_count").style.backgroundColor = "#fff";
		auto_chenge_over_count = true;

	}

	else if (Function_auto_chenge_over_count_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_auto_chenge_over_count").style.left = "4px";
		document.getElementById("switch_toggle_auto_chenge_over_count").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_auto_chenge_over_count").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_auto_chenge_over_count_stete_LS", false);

		document.getElementById("switch_auto_chenge_over_count").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_auto_chenge_over_count").style.backgroundColor = "#ababab";
		auto_chenge_over_count = false;

	}
	Function_auto_chenge_over_count_stete = !Function_auto_chenge_over_count_stete;
}


let Function_auto_toggle_out_display_stete;
Function_auto_toggle_out_display_stete = JSON.parse(localStorage.getItem("Function_auto_toggle_out_display_stete_LS"));
if (Function_auto_toggle_out_display_stete == null) {
	Function_auto_toggle_out_display_stete = false;
}
Function_auto_toggle_out_display();
function Function_auto_toggle_out_display() {
	if (Function_auto_toggle_out_display_stete == true) {//switch on
		document.getElementById("switch_toggle_auto_toggle_out_display").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_auto_toggle_out_display").style.width = "40%";
			document.getElementById("switch_toggle_auto_toggle_out_display").style.left = "38px";
		}, 250);

		localStorage.setItem("Function_auto_toggle_out_display_stete_LS", true);

		document.getElementById("switch_auto_toggle_out_display").style.boxShadow = "inset 0px 0px 0px 5px #00ff00";
		document.getElementById("switch_toggle_auto_toggle_out_display").style.backgroundColor = "#fff";
		auto_toggle_out_display = true;

		document.getElementById("out").style.backgroundColor = "#6d6d6d";
		document.getElementById("out").style.cursor = "not-allowed";
		const minus_button_minus1 = document.getElementById("out"); minus_button_minus1.disabled = true;
	}

	else if (Function_auto_toggle_out_display_stete == false) {//switch 0ff
		document.getElementById("switch_toggle_auto_toggle_out_display").style.left = "4px";
		document.getElementById("switch_toggle_auto_toggle_out_display").style.width = "88%";

		setTimeout(function () {
			document.getElementById("switch_toggle_auto_toggle_out_display").style.width = "40%";
		}, 250);

		localStorage.setItem("Function_auto_toggle_out_display_stete_LS", false);

		document.getElementById("switch_auto_toggle_out_display").style.boxShadow = "inset 0px 0px 0px 5px #4b4b4b";
		document.getElementById("switch_toggle_auto_toggle_out_display").style.backgroundColor = "#ababab";
		auto_toggle_out_display = false;

		document.getElementById("out").style.backgroundColor = main_2_input_button_color;
		document.getElementById("out").style.cursor = "pointer";
		const minus_button_minus1 = document.getElementById("out"); minus_button_minus1.disabled = false;
	}
	Function_auto_toggle_out_display_stete = !Function_auto_toggle_out_display_stete;
}

//------------------------------------------------------------
// help slide
let Function_help_button_stete = true; // help button
function Function_help_button() {
	if (Function_help_button_stete == true) {//switch on
		document.getElementById("help_div").style.width = "100%";
		setTimeout(function () {
			document.getElementById("help_div_text").style.opacity = 1;
		}, 300);
	}

	else if (Function_help_button_stete == false) {//switch 0ff
		document.getElementById("help_div_text").style.opacity = 0;
		setTimeout(function () {
			document.getElementById("help_div").style.width = "0%";
		}, 300);
	}
	Function_help_button_stete = !Function_help_button_stete;
}

//------------------------------------------------------------
// fullscreen button
let Function_fullscreen_button_stete = true; 
function fullscreen_button() {
	if (Function_fullscreen_button_stete == true) {//switch on
		document.documentElement.requestFullscreen()
		document.getElementById("notification_panel_wrap").style.height = "62.2%";
		document.getElementById("fullscreen_button").innerHTML = "exit<br>fullscreen";
	}

	else if (Function_fullscreen_button_stete == false) {//switch 0ff
		document.exitFullscreen()
		document.getElementById("notification_panel_wrap").style.height = "55%";
		document.getElementById("fullscreen_button").innerHTML = "enter<br>fullscreen";
	}
	Function_fullscreen_button_stete = !Function_fullscreen_button_stete;
}

//------------------------------------------------------------
// local storage clear
let notify_type;
function clear_numbers_in_local_storage() { // clear number data in memory
	notify_type = "clear_numbers";
	notify("open", "warning");
}
function clear_local_storage() { // clear all data in memory
	notify_type = "clear_all";
	notify("open", "warning");
}

//------------------------------------------------------------
// notification panel open or close
notify("close", "warning");
function notify(stete, icon) { 

	document.getElementById("notification_panel_left_button").style.opacity = 0;
	document.getElementById("notification_panel_right_button").style.opacity = 0;

	if (stete == "open"){
		document.getElementById("notification_panel_wrap").style.opacity = 1;
		document.getElementById("notification_panel_wrap").style.zIndex = 0;
	}
	else if (stete == "close"){
		document.getElementById("notification_panel_wrap").style.opacity = 0;
		document.getElementById("notification_panel_wrap").style.zIndex = -1;
	}
	
	if (icon == "warning"){
		document.getElementById("notification_panel_icon").src = "images/warning icon.svg";
	}
	else if (icon == "correct"){
		document.getElementById("notification_panel_icon").src = "images/correct icon.svg";
	}

	if (notify_type == "clear_numbers"){
		document.getElementById("notification_panel_left_button").style.opacity = 1;
		document.getElementById("notification_panel_right_button").style.opacity = 1;

		document.getElementById("notification_panel_heading").innerHTML = "Clear number data in memory";
		document.getElementById("notification_panel_paragraph").innerHTML = "Are you sure you want to clear <b>main score count</b>, <br><b>over count</b>, <b>score information of players</b>, etc. from the local storage?";
	}
	else if (notify_type == "clear_all"){
		document.getElementById("notification_panel_left_button").style.opacity = 1;
		document.getElementById("notification_panel_right_button").style.opacity = 1;

		document.getElementById("notification_panel_heading").innerHTML = "Clear all data in memory";
		document.getElementById("notification_panel_paragraph").innerHTML = "Are you sure you want to clear all data in local storage? <br>This includes <b>Team names</b>, <b>players names</b>, <br><b>team logo file paths</b>, <b>main score count</b>, <br><b>over count</b>, <b>score information of players</b>, etc.";
	}
	else if (notify_type == "save_players"){
		document.getElementById("notification_panel_left_button").style.opacity = 0;
		document.getElementById("notification_panel_right_button").style.opacity = 0;

		document.getElementById("notification_panel_heading").innerHTML = "Players saved";
		document.getElementById("notification_panel_paragraph").innerHTML = "<b>Team names</b>, <b>players names</b> and <b>team logo <br>file paths</b> have been saved to the local storage.";
	}
	else if (notify_type == "DEV_HW"){
		document.getElementById("notification_panel_left_button").style.opacity = 1;
		document.getElementById("notification_panel_right_button").style.opacity = 1;

		document.getElementById("notification_panel_heading").innerHTML = "Open the link in a new tab";
		document.getElementById("notification_panel_paragraph").innerHTML = "<b>Are you sure you want to open the link in a new tab?</b> <br>If you are in a live stream now, <b>DO NOT</b> open the link.";
	}
}

function Function_notification_panel_right_button() { // OK button
	if (notify_type == "clear_numbers"){
		localStorage.clear();
		save_variables();
		//console.log("clear_numbers");
		notify("open", "correct");
		setTimeout(function () {
			notify("close", "correct");
		}, 500);
	}
	else if (notify_type == "clear_all"){
		localStorage.clear();
		//console.log("clear_all");
		notify("open", "correct");
		setTimeout(function () {
			notify("close", "correct");
		}, 500);
	}
	else if (notify_type == "DEV_HW"){
		Function_fullscreen_button_stete = false; // exit fullscreen
		fullscreen_button(); // exit fullscreen
		window.open("https://github.com/HelinduWitharana", "_blank"); // open link in a new tab
		notify("close", "warning"); // close notification panel
	}
}

function Function_notification_panel_left_button() { // cancel button
	notify("close", "warning");
	notify_type = "";
	//console.log("Exit");
}

//------------------------------------------------------------
// open github link
function DEV_HW() {
	notify_type = "DEV_HW";
	notify("open", "warning");
}

//------------------------------------------------------------
// reload or exit alert
function Function_ask_to_reload() {
	return "Changes you made may not be saved. Are you sure?";
}


//............................................................

//web score board code...

function update_web() {
	let status_value = false;
	let opponent_team_score;
	let opponent_team_wickets;
	let opponent_team_overs;
	let tos_win_team_name;

	opponent_team_score = document.getElementById("opponent_team_score").value; //get opponent team score value
	opponent_team_wickets = document.getElementById("opponent_team_wickets").value; //get opponent team wickets value
	opponent_team_overs = document.getElementById("opponent_team_overs").value; //get opponent team overs value

	tos_win_team_name = document.getElementById("tos_win_team").value; //get tos win team name


	let status_value_select = document.getElementById("Set_status_select").value; //get value from the drop-down list
	if (status_value_select == "Live") {
		status_value = true;
		console.log("Live");
	}
	else if (status_value_select == "Paused") {
		status_value = false;
		console.log("Paused");
	}
	
	
	let player_batting;
	let player_bowling;

	if (switch_bat_pos == "top") {
		player_batting = document.getElementById("bater_top").textContent; //get top
	}
	else if (switch_bat_pos == "bottom") {
		player_batting = document.getElementById("bater_bottom").textContent; //get bottom
	}
	
	player_bowling = document.getElementById("bowler_name").textContent; //get bowler_name
	

	let playing_team_score;
	let playing_team_wickets;
	let playing_team_overs;

	playing_team_score = mainscore;
	playing_team_wickets = wickets;
	playing_team_overs = document.getElementById("over").textContent;


	console.log("status - " + status_value);

	console.log("batting - " + player_batting);
	console.log("bowling - " + player_bowling);

	console.log("tosWin - " + tos_win_team_name);

	console.log("scoreSchool2 - " + opponent_team_score);
	console.log("wickets2 - " + opponent_team_wickets);
	console.log("overs2 - " + opponent_team_overs);

	console.log("scoreSchool1 - " + playing_team_score);
	console.log("wickets1 - " + playing_team_wickets);
	console.log("overs1 - " + playing_team_overs);
	
	
	fetchData({
        status: status_value, // match status
		
		batting: player_batting.toString(),// player batting
        bowling: player_bowling.toString(), // player bowling
        
        tosWin: tos_win_team_name.toString(), // tos win team name
		
		scoreSchool2: opponent_team_score, // opponent team score
		wickets2: opponent_team_wickets, // opponent team wickets
		overs2: opponent_team_overs, // opponent team overs

		scoreSchool1: playing_team_score, // playing team score
        wickets1: playing_team_wickets, // playing team wickets
		overs1: playing_team_overs, // playing team overs
    })
	
}



//----------------

async function fetchData(data) {
    const dataToPost = {
        status: data.status, // Boolean
        bowling: data.bowling, // String
        batting: data.batting, // String
        scoreSchool1: data.scoreSchool1, // Number
        scoreSchool2: data.scoreSchool2, // Number
        tosWin: data.tosWin, // String -> Royal / Batting
        overs1: data.overs1, // Number
        overs2: data.overs2, // Number
        wickets1: data.wickets1, // Number
        wickets2: data.wickets2, // Number
    }

    const res = await fetch('https://murcscoreboardapi.herokuapp.com/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token':
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im11cmMiLCJlbWFpbCI6Im11cmNsaXZlLmNvbUBnbWFpbC5jb20iLCJpYXQiOjE2Mzk0ODkxNjgsImV4cCI6MTY3MTAyNTE2OH0.eTRBmpVl9GYpypWNqoFG5rAyLm3kmXCMeOanUlnPmCo',
          },
        body: JSON.stringify(dataToPost),
    })

    if (res.status === 500) {
        console.log('Internal server error')
    }
    if (res.status === 400) {
        console.log('Bad request')
    }
}