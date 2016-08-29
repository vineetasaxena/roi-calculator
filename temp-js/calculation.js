// JavaScript Document
var arr_income=new Array();
var arr_taxbcost=new Array();
var arr_preduction=new Array();

jQuery(document).ready(function () {

	var h_calc_table = jQuery('#calc_table').height();
	var h_table_analysis = jQuery('#table_analysis').height();
	var h_table_invest = jQuery('#table_invest').height();
	var h_tbl_roi = jQuery('#tbl_roi').height();
	var h_table_yend = jQuery('#table_yend').height();
	var spos = h_calc_table;
	var show_pa=false;
	var show_ia=false;
	var show_oca=false;
	var show_psa=false;
	var show_tir=false;

	red_minus();

  jQuery("#results_box").hide();
	jQuery("#a_pa").hide();
	jQuery("#a_ia").hide();
	jQuery("#a_oca").hide();
	jQuery("#a_psa").hide();
	jQuery("#a_tir").hide();
	jQuery("div#assume_pa").css("background-image","url(plus-img.png)");
	jQuery("div#assume_ia").css("background-image","url(plus-img.png)");
	jQuery("div#assume_oca").css("background-image","url(plus-img.png)");
	jQuery("div#assume_psa").css("background-image","url(plus-img.png)");
	jQuery("div#assume_tir").css("background-image","url(plus-img.png)");

	jQuery("#assume_pa").click(function(){
		if (jQuery("#a_pa").is(":visible")){
			jQuery("div#assume_pa").css("background-image","url(plus-img.png)");
			show_pa=false;
		}else {
			jQuery("div#assume_pa").css("background-image","url(minus.png)");
			show_pa=true;
		}
		jQuery("#a_pa").slideToggle(500);
	});

	jQuery("#assume_ia").click(function(){
		if (jQuery("#a_ia").is(":visible")){
			jQuery("div#assume_ia").css("background-image","url(plus-img.png)");
			show_ia=false;
		}else {
			jQuery("div#assume_ia").css("background-image","url(minus.png)");
			show_ia=true;
		}
		jQuery("#a_ia").slideToggle(500);
	});

	jQuery("#assume_oca").click(function(){
		if (jQuery("#a_oca").is(":visible")){
			jQuery("div#assume_oca").css("background-image","url(plus-img.png)");
			show_oca=false;
		}else {
			jQuery("div#assume_oca").css("background-image","url(minus.png)");
			show_oca=true;
		}
		jQuery("#a_oca").slideToggle(500);
	});

	jQuery("#assume_psa").click(function(){
		if (jQuery("#a_psa").is(":visible")){
			jQuery("div#assume_psa").css("background-image","url(plus-img.png)");
			show_psa=false;
		}else {
			jQuery("div#assume_psa").css("background-image","url(minus.png)");
			show_psa=true;
		}
		jQuery("#a_psa").slideToggle(500);
	});

	jQuery("#assume_tir").click(function(){
		if (jQuery("#a_tir").is(":visible")){
			jQuery("div#assume_tir").css("background-image","url(plus-img.png)");
			show_tir=false;
		}else {
			jQuery("div#assume_tir").css("background-image","url(minus.png)");
			show_tir=true;
		}
		jQuery("#a_tir").slideToggle(500);
	});

	jQuery(".imgHover").hover(function() {
		jQuery(this).children("img").fadeTo(200, 0.25)
			   .end().children(".hover").fadeIn(1000);
	}, function() {
		jQuery(this).children("img").fadeTo(200, 1)
			   .end().children(".hover").fadeOut(1000);
	});

	jQuery(".imgHover").hover(function() {
		jQuery(this).children("img").fadeTo(200, 0.25)
			   .end().children(".hover_tax").fadeIn(1000);
	}, function() {
		jQuery(this).children("img").fadeTo(200, 1)
			   .end().children(".hover_tax").fadeOut(1000);
	});

  	jQuery("#show_invest").click(function(){

		if (jQuery("#results_box").is(":visible")) {
			jQuery('#show_invest span.button').text('Show Detailed Investment Performance');
		}else {
			jQuery("#table_analysis").show();
			jQuery("#tbl_roi").hide();
			jQuery("#table_yend").hide();
			jQuery("#table_invest").hide();
			jQuery('#show_invest span.button').text('Hide Detailed Investment Performance ');
			 jQuery('html, body').animate({scrollTop:spos},1500);
		}
		jQuery("#results_box").slideToggle(1500);
  	});

	jQuery("#h_analysis").click(function(){
		if (jQuery("#table_analysis").is(":visible")) {
			jQuery("#h_analysis img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_show.png");
		}else {
			spos = h_calc_table;
			jQuery("#h_analysis img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_hide.png");
			 jQuery('html, body').animate({scrollTop:spos},1500);
		}
		jQuery("#table_analysis").slideToggle(1500);
	});

	jQuery("#h_invest").click(function(){
		if (jQuery("#table_invest").is(":visible")) {


			jQuery("#h_invest img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_show.png");
		}else {
			spos = h_calc_table + jQuery('#table_analysis').height();
			jQuery("#h_invest img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_hide.png");
			 jQuery('html, body').animate({scrollTop:spos},1200);
		}
		jQuery("#table_invest").slideToggle(1200);
	});

	jQuery("#h_roi").click(function(){

		if (jQuery("#tbl_roi").is(":visible")) {
			jQuery("#h_roi img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_show.png");
		}else {
			spos = h_calc_table + jQuery('#table_analysis').height()+ jQuery('#table_invest').height();
			jQuery("#h_roi img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_hide.png");
			 jQuery('html, body').animate({scrollTop:spos},1000);
		}
		jQuery("#tbl_roi").slideToggle(1000);
	});

	jQuery("#h_yend").click(function(){

		if (jQuery("#table_yend").is(":visible")) {
			jQuery("#h_yend img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_show.png");
		}else {
			spos = h_calc_table + jQuery('#table_analysis').height()+ jQuery('#table_invest').height()+jQuery('#tbl_roi').height();
			jQuery("#h_yend img#img_sh").attr('src',"http://www.rentalpropertyreporter.com/wp-content/uploads/2013/04/btn_hide.png");
			jQuery('html, body').animate({scrollTop:spos},1000);
		}
		jQuery("#table_yend").slideToggle(1000);
	});


	jQuery('#calc_table input').keydown(function(e) {
		var inputs = jQuery(this).parents("form").eq(0).find(":input");
		var idx = inputs.index(this);
		var c = inputs[idx].value;
		var input_name = inputs[idx].name;
		var n=c.replace(/,/g,"");

		if(idx > 27){

				inputs[0].focus();
				return inputs[0].select();

		}

		if (e.keyCode == 13 || e.keyCode == 9 || e.keyCode==40 ||  e.keyCode==38 ) {


			if (idx == inputs.length - 1) {
				inputs[0].select()
			} else {
				if ( e.keyCode==38 ) {
					if (idx==0) {
						//inputs[0].focus();
						inputs[0].select();
					}else {
						if (idx==inputs.length - 1) return false;

						if(input_name=='r_monthly_rent' && !show_pa) {
							idx = idx-2;
						}
						if(input_name=='o_property_improve' && !show_ia) {
							idx = idx-2;
						}
						if(input_name=='s_sales_price' && !show_oca) {
							idx = idx-4;
						}
						if(input_name=='t_land_percent' && !show_psa) {
							idx = idx-3;
						}

						inputs[idx - 1].focus();
						inputs[idx - 1].select();
					}
				}else  {
					if (idx==inputs.length - 1) return false;

					if(input_name=='b_interest_rate' && !show_pa) {
						idx = idx+2;
					}


					if(input_name=='r_cap_rate' && !show_ia) {
						idx = idx+2;
					}

					if(input_name=='o_property_improve' && !show_oca) {
						idx = idx+4;
					}
					if(input_name=='s_sales_price' && !show_psa) {
						idx = idx+3;
					}
					if(input_name=='t_property_tax' && !show_tir) {
						idx = -1;
					}
					inputs[idx + 1].focus();
					inputs[idx + 1].select();
				}
			}
			return false;
		}
	});

jQuery('input.user_input').focusout(function() {
			var inputs = jQuery(this).parents("form").eq(0).find(":input");
			var idx = inputs.index(this);
			var data = inputs[idx];
			var c = inputs[idx].value;
			var input_name = inputs[idx].name;
			if (data.value == null || data.value == "") {
				inputs[idx].value=0;

			}
			b = c.replace(/,/g,"");
			if (isNaN(b)) {
				inputs[idx].value=0;

			}


			if(isNaN(b)) {
				alert (' Invalid value \n Value must be numeric ');
				inputs[idx].focus();
				inputs[idx].value=0;
			} else {
				switch (input_name)
				{
				case 'b_home_value':
				case 'r_monthly_rent':
				case 'b_loan_term':
				case 'o_property_improve':
				case 'o_inout_costs':
				  	if(c < 0 && n.lenght!= 0 ) {
						alert ('Value must be greater than 0\n Initial value set to zero');
						inputs[idx].value=0;

					}
				  	break;
				case 'b_int_investment_percent':
				case 'b_interest_rate':
				case 'b_buying_costs':
				case 'r_vacancy_rate':
				case 'r_rent_increases':
				case 'o_property_mgt':
				case 'o_maintenance':
				case 'o_insurance_cost':
				case 's_selling_costs':
				case 't_land_percent':
				case 't_property_tax':
				case 't_rate':
				case 't_capital':
				case 't_cost_inf_rate':
				case 't_invest_hrate':
				  	if(c < 0 || c > 100) {
						alert ('Value must be between 0 - 100\n Initial value set to zero');
						inputs[idx].value=0;
					}
				  	break;
				case 's_annual_app':
					if(c > 100) {
						alert ('Value must be between 0 - 100\n Initial value set to zero');
						inputs[idx].value=0;
					}
					break;
			}

			};

});

	jQuery('input.user_input').keyup(function(e) {
			var inputs = jQuery(this).parents("form").eq(0).find(":input");
			var idx = inputs.index(this);
			var data = inputs[idx];
			var c = inputs[idx].value;

			if (data.value != null && data.value.length != 0) {
					calculation(data);
					red_minus();
			}

	});

});


function red_minus(){
	jQuery(document).ready(function () {
		jQuery('input').each(function() {
			var value = jQuery(this).val();
			var cvalue = jQuery(this).val();
			var className = jQuery(this).attr('class');
			var negative = value.search('-');

			if(negative != 0) {
				if(className=='ibold'){
					jQuery(this).css('color','#003876');
				}else if (className=='optional user_input'){
					jQuery(this).css('color','#919191');
				}
				else {
					jQuery(this).css('color','black');
				}
			}else if (value!='-' ){
					jQuery(this).css('color','red');

			}

		});
	});


}


function calculation(input)
{
	var c = input.value;
  	calculations(input.form);

}


function calculations(form) {

	var b_home_value = form.b_home_value.value.replace(/,/g,"");
	//c25 Invesment
	var b_int_investment_percent = eval(form.b_int_investment_percent.value/100);
	var b_int_investment = b_home_value * b_int_investment_percent;
	//c26 debt
	var b_debt = b_home_value - b_int_investment;
	//c27 loan term
	var b_loan_term = eval(form.b_loan_term.value);
	//c28 interest rate
	var b_interest_rate = eval(form.b_interest_rate.value/100);
	//c29 buying cost
	var b_buying_costs = eval(form.b_buying_costs.value/100);
	//c31 monthly rent
	var r_monthly_rent = form.r_monthly_rent.value.replace(/,/g,"");

	//c32 vacancy_rate
	var r_vacancy_rate = eval(form.r_vacancy_rate.value/100);
	//c33 rent increases
	var r_rent_increases = eval(form.r_rent_increases.value/100);
	//c34 cap rate (calculated);
	var r_cap_rate = (r_monthly_rent*12)/b_home_value;
	//c37
	var o_property_mgt = eval(form.o_property_mgt.value/100);
	//c38
	var o_maintenance = eval(form.o_maintenance.value/100);
	//c39 insurance cost
	var o_insurance_cost = eval(form.o_insurance_cost.value/100);
	//c40 property improve
	var o_property_improve = form.o_property_improve.value.replace(/,/g,"");

	//c41 Move-in Move out costs
	var tmp_oi_cost = form.o_inout_costs.value.replace(",","");
	var o_inout_costs = eval(tmp_oi_cost/100);
	//c43 selling costs
	var s_selling_costs = eval(form.s_selling_costs.value / 100);
	//c44 Annual Appreciation
	var s_annual_app = eval(form.s_annual_app.value/100);
	//d47 Land value
	var t_land_percent = eval(form.t_land_percent.value/100);
	//c47 land value calculated
	var t_land_value = Math.round(b_home_value * t_land_percent);
	//c48 Tax basis
	var t_basis = b_home_value - t_land_value;
	//c49 tax rate
	var t_rate = eval(form.t_rate.value/100);
	//c50 Capital Gains tax
	var t_capital = eval(form.t_capital.value/100);
	//c51 property tax
	var t_property_tax = eval(form.t_property_tax.value/100);
	//c52 Cost inflation rate
	var t_cost_inf_rate = eval(form.t_cost_inf_rate.value/100);
	//c53 Investment Hurdle rate
	var t_invest_hrate = eval(form.t_invest_hrate.value/100);
	//PMT Value PMT(75000,0.045/12,360)*12;
	var pmt_value =eval(PMT(b_debt,b_interest_rate/12,b_loan_term)*12);
	//r_rent_mratio C31/((L46+L44*(1-C49))/12 + L7/12 + L6/12)
	var r_rent_mratio = eval(r_monthly_rent/((pmt_value+(b_debt*b_interest_rate)*(1-t_rate))/12 + (b_home_value * o_insurance_cost)/12 + (b_home_value*t_property_tax)/12));

	//s_sales_price=C24*(1+C44)^5
	var s_sales_price = Math.round(eval(b_home_value * Math.pow(1+s_annual_app,5)));
	var val_sales_com = Math.round(s_sales_price*s_selling_costs);


	form.b_int_investment.value = formatNumber(b_int_investment);
	form.b_debt.value = formatNumber(b_debt);
	f_cap_rate = r_cap_rate*100;
	form.r_cap_rate.value = formatNumber(f_cap_rate.toFixed(2));
	form.t_land_value.value = formatNumber(t_land_value);
	form.t_basis.value = formatNumber(t_basis);
	//form.r_rent_mratio.value=formatNumber(r_rent_mratio.toFixed(2));
	form.s_sales_price.value = formatNumber(s_sales_price);

	form.val_sales_com.value = formatNumber(val_sales_com.toFixed(2));


	//table
	var fp_ri1 = (b_home_value*r_cap_rate)*(1-r_vacancy_rate);//L3 -> (C24*C34)*(1-$C32);
	var fp_ri0 =  1 + r_rent_increases;
	var fp_ri2 = fp_ri1 * fp_ri0;//L3*(1+$C33);
	var fp_ri3 = fp_ri2 * fp_ri0;//L3*(1+$C33);
	var fp_ri4 = fp_ri3 * fp_ri0;//L3*(1+$C33);
	var fp_ri5 = fp_ri4 * fp_ri0;//L3*(1+$C33);
	var tot_fp_ri = fp_ri1 + fp_ri2 + fp_ri3 + fp_ri4 + fp_ri5;

	var rent_income = new Array(fp_ri1,fp_ri2,fp_ri3,fp_ri4,fp_ri5,tot_fp_ri);

	form.fp_ri1.value = currency(Math.round(fp_ri1));
	form.fp_ri2.value = currency(Math.round(fp_ri2));
	form.fp_ri3.value = currency(Math.round(fp_ri3));
	form.fp_ri4.value = currency(Math.round(fp_ri4));
	form.fp_ri5.value = currency(Math.round(fp_ri5));
	form.fp_ri_total.value = currency(Math.round(tot_fp_ri));
	//variable
	var fp_interest1 = b_debt * b_interest_rate;
	var fp_tax1 = t_property_tax * b_home_value;
	var fp_insurance1 = b_home_value * o_insurance_cost;
	var fp_ttc1 = o_inout_costs * (r_vacancy_rate/0.0833333333333333)*100;
	var fp_maintenance1 = o_maintenance * b_home_value;
	var fp_bcost = b_buying_costs * b_home_value;
	var fp_pm1 = fp_ri1 * o_property_mgt;

	form.fp_interest1.value = currency(Math.round(fp_interest1));
	form.fp_tax1.value = currency(Math.round(fp_tax1));
	form.fp_insurance1.value = currency(Math.round(fp_insurance1));
	form.fp_ttc1.value = currency(Math.round(fp_ttc1));
	form.fp_maintenance1.value = currency(Math.round(fp_maintenance1));
	form.fp_bcost.value = currency(Math.round(fp_bcost));
	form.fp_pm1.value = currency(Math.round(fp_pm1));

	var fp_totale1 = fp_interest1+fp_tax1+(b_home_value * o_insurance_cost)+(o_inout_costs * (r_vacancy_rate/0.0833333333333333)*100)+(o_maintenance * b_home_value)+(b_buying_costs * b_home_value)+(fp_ri1 * o_property_mgt);
	var fp_income1 = fp_ri1 - fp_totale1;
	var fp_depreciation1 = - (t_basis / 27.5);
	var fp_taxincome1 = fp_depreciation1 + fp_income1;
	var fp_taxb1 = fp_taxincome1 * t_rate;
	var fp_preduction1 = pmt_value - fp_interest1;
	var fp_annual_cf1 = fp_income1 - fp_taxb1 - fp_preduction1 - o_property_improve;
	var fp_roicf1 = fp_annual_cf1 / b_int_investment;

	form.fp_totale1.value = currency(Math.round(fp_totale1));
	form.fp_income1.value = currency(Math.round(fp_income1));
	form.fp_depreciation1.value = currency(Math.round(fp_depreciation1));
	form.fp_taxincome1.value = currency(Math.round(fp_taxincome1));
	form.fp_taxb1.value = currency(Math.round(fp_taxb1));
	form.fp_preduction1.value = currency(Math.round(fp_preduction1));
	form.fp_ce.value = currency(Math.round(o_property_improve));
	form.fp_annual_cf1.value = currency(Math.round(fp_annual_cf1));
	form.fp_roicf1.value = format_percent(fp_roicf1,1);

	var loan_balance = new Array();
	var interest = new Array();
	var principal = new Array();
	var idepriciation = new Array();
	loan_balance[0]= b_debt;
	interest[0] = fp_interest1;
	principal[0]= pmt_value - fp_interest1;
	idepriciation[0]=fp_depreciation1;
	var a = 0;
	var total_interest =0;
	var total_principal=0;
	var total_idepriciation=0;
	for (i = 1; i < 5; i++) {
		loan_balance[i] = loan_balance[a] - (pmt_value - interest[a]);
		interest[i] = loan_balance[i] * b_interest_rate;
		principal[i] = pmt_value - interest[i];
		idepriciation[i]=idepriciation[a];
		total_interest = total_interest + interest[i];
		total_principal = total_principal + principal[i];
		total_idepriciation = total_idepriciation + idepriciation[i];
		a++;
	}
	loan_balance[5] = loan_balance[4] - principal[4];
	total_interest = total_interest + interest[0];
	total_principal = total_principal + principal[0];
	interest[5]= total_interest;
	principal[5]=total_principal;
	idepriciation[5]=total_idepriciation + idepriciation[0];

	var depricited = Math.round(b_home_value) + Math.round(o_property_improve) + Math.round(idepriciation[5]);
	var selling_cost = 0 - (s_selling_costs * s_sales_price);
	var taxable_gain = s_sales_price - depricited + selling_cost;
	var cashp = s_sales_price + selling_cost;
	var drecap =  Math.round(idepriciation[5]) * t_rate;
	var cap_gain = 0 - ((s_sales_price - b_home_value) * 0.15);
	var npayoff = b_debt - principal[5];
	var cashfsale = s_sales_price - npayoff + selling_cost + drecap + cap_gain;


	form.fp_salesprice.value = currency(s_sales_price);
	form.fp_salesprice_2.value = currency(s_sales_price);
	form.fp_salesprice_c1.value = currency(s_sales_price);
	form.fp_salesprice_c2.value = currency(s_sales_price);

	form.fp_dbasic.value = currency(Math.round(depricited));

	form.fp_sellcost.value = currency(Math.round(selling_cost));
	form.fp_sellcost_2.value = currency(Math.round(selling_cost));
	form.fp_sellcost_c1.value = currency(Math.round(selling_cost));
	form.fp_sellcost_c2.value = currency(Math.round(selling_cost));

	form.fp_taxgain.value = currency(Math.round(taxable_gain));
	form.fp_taxgain_2.value = currency(Math.round(taxable_gain));
	form.fp_taxgain_c1.value = currency(Math.round(taxable_gain));


	form.fp_cpt_repayment.value = currency(Math.round(cashp));

	//form.tax_drecapture.value = currency(Math.round(drecap));
	//form.tax_drecapture_2.value = currency(Math.round(drecap));

	form.tax_drecapture_c1.value = currency(Math.round(drecap));
	form.tax_drecapture_c2.value = currency(Math.round(drecap));

	//form.tax_cgains.value = currency(Math.round(cap_gain));
	//form.tax_cgains_2.value = currency(Math.round(cap_gain));

	form.taxes.value = currency(Math.round(cap_gain+drecap));
	form.taxes2.value = currency(Math.round(cap_gain+drecap));

	form.tax_cgains_c1.value = currency(Math.round(cap_gain));
	form.tax_cgains_c2.value = currency(Math.round(cap_gain));

	form.tax_payoff.value = currency(Math.round(npayoff));
	form.tax_payoff_2.value = currency(Math.round(npayoff));
	form.tax_payoff_c1.value = currency(Math.round(npayoff));
	form.tax_payoff_c2.value = currency(Math.round(npayoff));

	form.tax_cfsales.value = currency(Math.round(cashfsale));
	form.tax_cfsales2.value = currency(Math.round(cashfsale));

	form.b_home_value.value = formatNumber(Math.round(b_home_value));
	form.r_monthly_rent.value = formatNumber(Math.round(r_monthly_rent));
	form.o_property_improve.value=formatNumber(Math.round(o_property_improve));
	form.o_inout_costs.value=formatNumber(Math.round(o_inout_costs * 100));

	html_balance(loan_balance, interest,principal,pmt_value);

	financial(form,s_annual_app,t_cost_inf_rate, fp_tax1, fp_insurance1,fp_ttc1,fp_maintenance1,fp_bcost,fp_pm1,rent_income,o_property_mgt,interest,fp_depreciation1,t_rate,principal, pmt_value,o_property_improve, t_invest_hrate,fp_annual_cf1,b_int_investment,cashfsale,t_invest_hrate,b_home_value);

	net_cash_flow(o_property_improve);

}

function net_cash_flow(property_improve){
	/*
	var arr_income=new Array();
	var arr_taxbcost=new Array();
	var arr_preduction=new Array();
	*/
	var tform = document.forms['form_roi'];
	var tmp_value = 0;
	var a = 1;
	for (i = 0; i <= 5; i++) {
		tmp_net_cf = 'net_cf'+a;
		tmp_value = arr_income[i]-arr_taxbcost[i]-arr_preduction[i];
		if (i==0) {
			tmp_value = tmp_value - property_improve;
		}
		tform[tmp_net_cf].value = currency(Math.round(tmp_value));
		a++;
	}

}




//function financial projection
function financial(form_i,s_annual_app_i,t_cost_inf_rate_i, fp_tax1_i,fp_insurance1_i,fp_ttc1_i,fp_maintenance1_i,fp_bcost_i,fp_pm1_i,rent_income_i,o_property_mgt_i,val_interest_i,fp_depreciation1_i,t_rate_i,principal_i,pmt_value_i,o_property_improve_i, t_invest_hrate_i,fp_annual_cf1_i,b_int_investment_i,cashfsale_i,t_invest_hrate_i,b_home_value_i) {
	var npv_values=new Array();
	var taxes = new Array();
	var insurance = new Array();
	var tenant = new Array();
	var maintenance = new Array();
	var manage = new Array();
	var texpensive = new Array();
	var interest = new Array();
	var income = new Array();
	var depreciation = new Array();
	var taxincome = new Array();
	var taxbcost = new Array();
	var annual = new Array();
	var roi = new Array();
	var deal = new Array();

	var total_taxes = 0;
	var total_insurance =0;
	var total_tenant=0;
	var total_maintenance=0;
	var total_manage =0;
	var total_depreciation =0;
	var total_taxbcost =0;
	var total_roi = 0;
	var depriciated;



	taxes[0]=fp_tax1_i;
	insurance[0]=fp_insurance1_i;
	tenant[0]=fp_ttc1_i;
	maintenance[0]=fp_maintenance1_i;
	manage[0]=fp_pm1_i;
	interest = val_interest_i;

	texpensive[0] = taxes[0]+ insurance[0] + tenant[0] + maintenance[0]+manage[0]+interest[0] + fp_bcost_i;
	income[0] = rent_income_i[0] - texpensive[0];
	depreciation[0]=fp_depreciation1_i;
	taxincome[0]=income[0]+depreciation[0];
	taxbcost[0]=taxincome[0] * t_rate_i;
	annual[0]=fp_annual_cf1_i;
	roi[0] = annual[0]/ b_int_investment_i;
	deal[0] = 0 - b_int_investment_i;

	var total_deal = deal[0];

	var a =0;
	for (i = 1; i < 5; i++) {
		taxes[i] = taxes[a] + (taxes[a]* t_cost_inf_rate_i);
		insurance[i] = insurance[a] + (insurance[a]* t_cost_inf_rate_i);
		tenant[i] = tenant[a] + (tenant[a]* t_cost_inf_rate_i);
		maintenance[i]=maintenance[a];
		manage[i] =  rent_income_i[i] * o_property_mgt_i;
		texpensive[i] = taxes[i]+ insurance[i] + tenant[i] + maintenance[i]+manage[i]+interest[i];
		income[i] = rent_income_i[i] - texpensive[i];
		depreciation[i]=depreciation[a];
		taxincome[i]=income[i]+depreciation[i];
		taxbcost[i]=taxincome[i]* t_rate_i;
		annual[i]=income[i]-taxbcost[i]-principal_i[i];
		roi[i]=annual[i] / b_int_investment_i;
		deal[i]=annual[a];

		total_taxes = total_taxes + taxes[i];
		total_insurance = total_insurance + insurance[i];
		total_tenant = total_tenant + tenant[i];
		total_maintenance = total_maintenance + maintenance[i];
		total_manage = total_manage + manage[i];
		total_depreciation = total_depreciation + depreciation[i];
		total_taxbcost = total_taxbcost + taxbcost[i];
		total_roi = total_roi + roi[i];
		total_deal = total_deal + deal[i];
		a++;
	}
	var net_cashflow;
	var irr_value;
	var cumulatif_roi;
	var present_value;
	var walkaway_price;


	deal[5] = cashfsale_i + annual[4];
	taxes[5]= total_taxes + taxes[0];
	insurance[5]= total_insurance + insurance[0];
	tenant[5]= total_tenant + tenant[0];
	maintenance[5]= total_maintenance + maintenance[0];
	manage[5]= total_manage + manage[0];
	texpensive[5] = taxes[5]+ insurance[5] + tenant[5] + maintenance[5]+manage[5]+interest[5]+fp_bcost_i;
	income[5] = rent_income_i[5] - texpensive[5];
	depreciation[5] = total_depreciation + depreciation[0];
	taxincome[5]=income[5]+depreciation[5];
	taxbcost[5]=taxincome[5]* t_rate_i;
	annual[5] = income[5]-taxbcost[5]-principal_i[5];
	roi[5] = annual[5] /b_int_investment_i;

	net_cashflow = total_deal + deal[5];
	irr_value = IRR(deal);
	cumulatif_roi = net_cashflow/b_int_investment_i;
	present_value = NPV(t_invest_hrate_i,deal);
	walkaway_price = Math.round(b_home_value_i) + Math.round(present_value);
	//build html
	html_financial(form_i,taxes,insurance,tenant,maintenance,manage,texpensive,income,depreciation,taxincome,taxbcost, annual,roi,deal,net_cashflow,irr_value,cumulatif_roi,present_value,walkaway_price);

	roi_table(b_int_investment_i,b_home_value_i,s_annual_app_i,annual);

	//income,taxbcost,
	arr_income=income;
	arr_taxbcost=taxbcost;


}



function roi_table(b_int_investment_r,b_home_value_r,s_annual_app_r,annual_r){
	var tax = 0.85;
	var initial_investment = b_int_investment_r;
	var ypp = new Array();
	var again_tax = new Array();
	var ncash_flow = annual_r;
	var wincrease = new Array();
	var roi = new Array();
	initial_investment = b_int_investment_r;
	ypp[0] = s_annual_app_r * b_home_value_r;
	again_tax[0]= ypp[0] * tax;
	wincrease[0]=annual_r[0]+again_tax[0];
	roi[0]=wincrease[0]/ initial_investment;
	var a=0;
	var sum_y = ypp[0];
	for (i = 1; i < 5; i++) {
		ypp[i] = b_home_value_r * Math.pow(1+s_annual_app_r,i+1) - b_home_value_r - sum_y;
		sum_y = sum_y + ypp[i];
		again_tax[i]=ypp[i]*tax;
		wincrease[i]=annual_r[i]+again_tax[i];
		roi[i] =  wincrease[i]/ initial_investment;
		a++;
	}

	html_roi_table(initial_investment,ypp,again_tax,annual_r,wincrease,roi);
}

function html_roi_table(h_initial_investment,h_ypp,h_again_tax,h_annual,h_wincrease,h_roi){
	var tform = document.forms['form_roi'];
	var a = 1;
	for (i = 0; i < 5; i++) {
		tmp_troi = 'troi_investment'+a;
		tmp_ypp = 'troi_yprice'+a;
		tmp_again_tax = 'troi_cgtax'+a;
		tmp_annual = 'troi_cflow'+a;
		tmp_wincrease = 'troi_cworth'+a;
		tmp_roi = 'troi_roi'+a;
		tform[tmp_troi].value = currency(Math.round(h_initial_investment));
		tform[tmp_ypp].value = currency(Math.round(h_ypp[i]));
		tform[tmp_again_tax].value = currency(Math.round(h_again_tax[i]));
		tform[tmp_annual].value = currency(Math.round(h_annual[i]));
		tform[tmp_wincrease].value =currency(Math.round(h_wincrease[i]));
		tform[tmp_roi].value =format_percent(h_roi[i],1);
		a++;
	}
}

function html_financial(form_h,h_taxes,h_insurance,h_tenant, h_maintenance,h_manage,h_expensive,h_income,h_depreciation,h_taxincome,h_taxbcost, annual_i,h_roi, h_deal,h_net_cashflow,h_irr_value,h_cumulatif_roi,h_present_value,h_walkaway_price){

	var tform = document.forms['form_roi'];
	tform['deal_cf'].value = currency(Math.round(h_deal[0]));


	tform['deal_cf5'].value = currency(Math.round(h_deal[5]));
	var a =1;
	var format_roi;
	for (i = 0; i < 5; i++) {
		tmp_taxes = 'fp_tax'+a;
		tmp_insurance = 'fp_insurance'+a;
		tmp_tenant = 'fp_ttc'+a;
		tmp_maintenance = 'fp_maintenance'+a;
		tmp_manage = 'fp_pm'+a;
		tmp_expensive = 'fp_totale'+a;
		tmp_income = 'fp_income'+a;
		tmp_depreciation = 'fp_depreciation'+a;
		tmp_taxincome = 'fp_taxincome'+a;
		tmp_taxbcost = 'fp_taxb'+a;
		tmp_annual = 'fp_annual_cf'+a;
		tmp_roi = 'fp_roicf'+a;
		tmp_deal = 'deal_cf'+a;
		tform[tmp_taxes].value = currency(Math.round(h_taxes[i]));
		tform[tmp_insurance].value = currency(Math.round(h_insurance[i]));
		tform[tmp_tenant].value = currency(Math.round(h_tenant[i]));
		tform[tmp_maintenance].value = currency(Math.round(h_maintenance[i]));
		tform[tmp_manage].value = currency(Math.round(h_manage[i]));
		tform[tmp_expensive].value = currency(Math.round(h_expensive[i]));
		tform[tmp_income].value = currency(Math.round(h_income[i]));
		tform[tmp_depreciation].value = currency(Math.round(h_depreciation[i]));
		tform[tmp_taxincome].value = currency(Math.round(h_taxincome[i]));
		tform[tmp_taxbcost].value = currency(Math.round(h_taxbcost[i]));
		tform[tmp_annual].value = currency(Math.round(annual_i[i]));
		format_roi = h_roi[i];
		tform[tmp_roi].value = format_percent(format_roi,1);
		tform[tmp_deal].value = currency(Math.round(h_deal[a]));
		a++;
	}
	//form_h.totalxx.value=annual_i[0];
	tform['fp_annual_cf_total'].value = currency(Math.round(annual_i[5]));
	tform['fp_tax_total'].value = currency(Math.round(h_taxes[5]));
	tform['fp_insurance_total'].value = currency(Math.round(h_insurance[5]));
	tform['fp_ttc_total'].value = currency(Math.round(h_tenant[5]));
	tform['fp_maintenance_total'].value = currency(Math.round(h_maintenance[5]));
	tform['fp_pm_total'].value = currency(Math.round(h_manage[5]));
	tform['fp_totale_total'].value = currency(Math.round(h_expensive[5]));
	tform['fp_income_total'].value = currency(Math.round(h_income[5]));
	tform['fp_depreciation_total'].value = currency(Math.round(h_depreciation[5]));
	tform['fp_taxincome_total'].value = currency(Math.round(h_taxincome[5]));
	tform['fp_taxb_total'].value = currency(Math.round(h_taxbcost[5]));
	format_roi =h_roi[5];
	tform['fp_roicf_total'].value = format_percent(format_roi,1);
	tform['net_cashflow'].value = currency(Math.round(h_net_cashflow));
	tform['irr'].value = format_percent(h_irr_value,1);
	tform['croi'].value = format_percent(h_cumulatif_roi,1);
	tform['present_value'].value = currency(Math.round(h_present_value));
	tform['walkway_price'].value = currency(Math.round(h_walkaway_price));
	//new copied
	tform['deal_cf_1c'].value = tform['deal_cf'].value;
	tform['deal_cf_2c'].value = tform['deal_cf'].value;
	tform['deal_cf_3c'].value = tform['deal_cf'].value;
	tform['deal_cf_1'].value = tform['deal_cf1'].value;
	tform['deal_cf_2'].value = tform['deal_cf2'].value;
	tform['deal_cf_3'].value = tform['deal_cf3'].value;
	tform['deal_cf_4'].value = tform['deal_cf4'].value;
	tform['deal_cf_5'].value = tform['deal_cf5'].value;
	tform['net_cashflow_2'].value = tform['net_cashflow'].value;

}


function html_balance(lbalance,linderest, lprincipal,lpmt){
	var tform = document.forms['form_roi'];
	total_interest =0;
	tform['dc_loanb'].value = currency(Math.round(lbalance[0]));
	tform['dc_interest'].value = currency(Math.round(linderest[0]));
	tform['dc_preduction'].value = currency(Math.round(lprincipal[0]));
	tform['dc_mpayment'].value = currency(Math.round(lpmt));

	var a = 0;

	for (i = 1; i < 5; i++) {
		tmp_loanname = 'dc_loanb'+ i;
		tmp_dc_interest = 'dc_interest'+i;
		tmp_fp_interest = 'fp_interest'+(i+1);
		tmp_dc_preduction = 'dc_preduction'+i;
		tmp_lpmt = 'dc_mpayment'+i;
		tmp_fp_preduction = 'fp_preduction'+(i+1);
		tform[tmp_loanname].value = currency(Math.round(lbalance[i]));
		tform[tmp_dc_interest].value = currency(Math.round(linderest[i]));
		tform[tmp_fp_interest].value = currency(Math.round(linderest[i]));
		tform[tmp_dc_preduction].value = currency(Math.round(lprincipal[i]));
		tform[tmp_lpmt].value = currency(Math.round(lpmt));
		tform[tmp_fp_preduction].value = currency(Math.round(lprincipal[i]));
		total_interest = total_interest + linderest[i];
	}
	total_interest = total_interest + linderest[0];
	tform['dc_loanb5'].value = currency(Math.round(lbalance[5]));
	tform['fp_interest_total'].value = currency(Math.round(total_interest));
	tform['fp_preduction_total'].value = currency(Math.round(lprincipal[5]));
	arr_preduction = lprincipal;

}
//end func loan balance debt calculation


function PMT(PV, IR, NP) {
  var vpmt = (PV * IR) / (1 - Math.pow(1 + IR, -NP));
  if (IR==0){
		vpmt = PV/NP;
	}

  return Math.round(vpmt);
}

function NPV(rate, values)
{

	if(isFinite(rate)){
		npv = 0.0;
		npv1 = 0.0;
		for (i = 0; i < values.length; i++)
		{

			npv = values[i] / Math.pow(1 + rate, i + 1);
			npv1 = npv1 + npv;
		}
		return npv1;
	}
}

function IRR(values)
{

	FINANCIAL_MAX_ITERATIONS=100;
	FINANCIAL_ACCURACY=1.0e-6;

	guess=0.1;
	x1 = 0.0;
	x2 = guess;
	f1 = NPV(x1, values);
	f2 = NPV(x2, values);
	for (i = 0; i < FINANCIAL_MAX_ITERATIONS; i++)
	{
		if ((f1 * f2) < 0.0) break;
		if (Math.abs(f1) < Math.abs(f2)) {
			f1 = NPV(x1 += 1.6 * (x1 - x2), values);
		} else {
			f2 = NPV(x2 += 1.6 * (x2 - x1), values);
		}
	}
	if ((f1 * f2) > 0.0) return null;

	f = NPV(x1, values);
	if (f < 0.0) {
		rtb = x1;
		dx = x2 - x1;
	} else {
		rtb = x2;
		dx = x1 - x2;
	}

	for (i = 0;  i < FINANCIAL_MAX_ITERATIONS; i++)
	{
		dx *= 0.5;
		x_mid = rtb + dx;
		f_mid = NPV(x_mid, values);
		if (f_mid <= 0.0) rtb = x_mid;
		if ((Math.abs(f_mid) < FINANCIAL_ACCURACY) || (Math.abs(dx) < FINANCIAL_ACCURACY)) return x_mid;
	}
	return null;
}

function round_decimals(original_number, decimals) {
  var result1 = original_number * Math.pow(10, decimals);
  var result2 = Math.round(result1);
  var result3 = result2 / Math.pow(10, decimals);
  return (result3);
}

function formatNumber(number) {
  number=number+'';
  return number.replace(/[^\d\.\-]/g, '').replace(/(\.\d{2})[\W\w]+/g, '$1').split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('').replace(/^([\-]{0,1}),/, '$1').replace(/(\.\d)$/, '$1'+'0').replace(/\.$/, '.00');
}

function currency(value){
	var number=value+'';
	if (isFinite(value)){
		if( number >= 0 ) {
			number = '$'+formatNumber(number);
		}else {
			number = number * -1;
			number = '-$'+formatNumber(number);
		}
		return number;
	}else {
		return '-';
	}

}

function format_percent(value,digit){
	var percent = value * 100;
	var fpercent = percent.toFixed(digit) + '%';

	if(isFinite(value)){
		return fpercent;
	}else {
		return '-';
	}
}

function printDiv()
{
if (window.print) { window.print() } else alert('To print this page press Ctrl-P on your keyboard.');
}


