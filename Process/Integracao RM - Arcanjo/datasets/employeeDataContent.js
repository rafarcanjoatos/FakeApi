function defineStructure() {

}
function onSync(lastSyncDate) {

}
//Programa responsável por integrar com os Webservices do RM
//Para executar o programa, seguir os passos abaixo:
// 1) Adicionar o arquivo abaixo ao seu projeto:
//         http://tdn.totvs.com/download/attachments/211064343/DataClientfluig.js
//  2) Inclua um serviço no Fluig com o nome WSDATASERVER apontando para  
//    http://localhost:8051/wsDataServer/MEX?singlewsdl (substituir localhost pelo IP e Porta do servidor RM)//.

function createDataset(fields, constraints, sortFields){
	
 //var usuario = "";  
 //var senha = "";  
 //var context = "CodUsuario=mestre;CodSistema=F;CodColigada=1"  
 //var filtro = "1=1" ;  
 //var retorno = dcReadView("CtbCCustoData", context, usuario, senha, filtro)  
 var dataset = DatasetBuilder.newDataset();
    
	try{
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {                                
	            companyId : getValue("WKCompany") + '',
                serviceCode : 'Integracao_Rm',
                endpoint: '/api/rh/v1/employeeDataContent',
                method : 'get'
             }

        var vo = clientService.invoke(JSON.stringify(data));
        var result = vo.getResult();

        log.info("############# Consultou Dados do Usuário")

        if(result== null || result.isEmpty()){
	        throw new Exception("Retorno está vazio");
        }else{                      
                                    
            try{        
                var json = JSON.parse(result);

                log.info("############# Objeto json: ");
                log.dir(json);

                dataset.addColumn('companyKey');
                dataset.addColumn('branch');
                dataset.addColumn('code');
                dataset.addColumn('id');
                dataset.addColumn('name');
                dataset.addColumn('fullName');
                dataset.addColumn('badgeNumber');
                dataset.addColumn('departmentCode');
                dataset.addColumn('departmentInternalId');
                dataset.addColumn('departmentDescription');
                dataset.addColumn('hiringDate');
                dataset.addColumn('demissionDate');
                dataset.addColumn('birthDate');
                dataset.addColumn('gender');
                dataset.addColumn('street');
                dataset.addColumn('streetNumber');
                dataset.addColumn('complement');
                dataset.addColumn('neighborhood');
                dataset.addColumn('homeState');
                dataset.addColumn('naturalCity');
                dataset.addColumn('employeeSituation');
                dataset.addColumn('workCenterCode');
                dataset.addColumn('city');
                dataset.addColumn('zipCode');
                dataset.addColumn('areaCode');
                dataset.addColumn('telephone');
                dataset.addColumn('areaCodeMobile');
                dataset.addColumn('mobileNumber');
                dataset.addColumn('socialIntegProgCode');
                dataset.addColumn('workCardNumber');
                dataset.addColumn('workCardSerie');
                dataset.addColumn('workCardStateIssuing');
                dataset.addColumn('costCenterCode');
                dataset.addColumn('costCenterInternalId');
                dataset.addColumn('costCenterDescription');
                dataset.addColumn('employeePositionCode');
                dataset.addColumn('employeePositionCodeInternalId');
                dataset.addColumn('employeePositionDescription');
                dataset.addColumn('salaryCategory');
                dataset.addColumn('workShiftCode');
                dataset.addColumn('workShiftInternalId');
                dataset.addColumn('workshiftDescription');
                dataset.addColumn('workShiftSequence');
                dataset.addColumn('initialShiftSequenceDate');
                dataset.addColumn('roleCode');
                dataset.addColumn('roleInternalId');
                dataset.addColumn('roleDescription');
                dataset.addColumn('roleLevel');
                dataset.addColumn('businessUnit');
                dataset.addColumn('clockInCard');
                dataset.addColumn('laborType');
                dataset.addColumn('unionCode');
                dataset.addColumn('workGroupCode');
                dataset.addColumn('employeeClassCode');
                dataset.addColumn('locality');
                dataset.addColumn('allocationPlanCode');
                dataset.addColumn('countryLocalityCode');
                dataset.addColumn('workShiftChangeDate');
                dataset.addColumn('timeTableCode');
                dataset.addColumn('carrierCode');
                dataset.addColumn('ruralGroupCode');
                dataset.addColumn('contractEnd');
                dataset.addColumn('employeeType');
                dataset.addColumn('privateCitizen');
                dataset.addColumn('registrationDigit');
                dataset.addColumn('transferenceAdmissionDate');
                dataset.addColumn('dateOfSalaryChange');
                dataset.addColumn('email');
                dataset.addColumn('monthlyWorkingHours');
                dataset.addColumn('wageTableInternalId');
                dataset.addColumn('typeOfSalaryChange');


                log.info("############# Adicionou Colunas");
                
                for (var i in json.employees){    

                    log.info("############# Entrou no For")
                    
                	dataset.addRow([
						json.employees[i]["companyKey"],
						json.employees[i]["branch"],
						json.employees[i]["code"],
						json.employees[i]["id"],
						json.employees[i]["name"],
						json.employees[i]["fullName"],
						json.employees[i]["badgeNumber"],
						json.employees[i]["departmentCode"],
						json.employees[i]["departmentInternalId"],
						json.employees[i]["departmentDescription"],
						json.employees[i]["hiringDate"],
						json.employees[i]["demissionDate"],
						json.employees[i]["birthDate"],
						json.employees[i]["gender"],
						json.employees[i]["street"],
						json.employees[i]["streetNumber"],
						json.employees[i]["complement"],
						json.employees[i]["neighborhood"],
						json.employees[i]["homeState"],
						json.employees[i]["naturalCity"],
						json.employees[i]["employeeSituation"],
						json.employees[i]["workCenterCode"],
						json.employees[i]["city"],
						json.employees[i]["zipCode"],
						json.employees[i]["areaCode"],
						json.employees[i]["telephone"],
						json.employees[i]["areaCodeMobile"],
						json.employees[i]["mobileNumber"],
						json.employees[i]["socialIntegProgCode"],
						json.employees[i]["workCardNumber"],
						json.employees[i]["workCardSerie"],
						json.employees[i]["workCardStateIssuing"],
						json.employees[i]["costCenterCode"],
						json.employees[i]["costCenterInternalId"],
						json.employees[i]["costCenterDescription"],
						json.employees[i]["employeePositionCode"],
						json.employees[i]["employeePositionCodeInternalId"],
						json.employees[i]["employeePositionDescription"],
						json.employees[i]["salaryCategory"],
						json.employees[i]["workShiftCode"],
						json.employees[i]["workShiftInternalId"],
						json.employees[i]["workshiftDescription"],
						json.employees[i]["workShiftSequence"],
						json.employees[i]["initialShiftSequenceDate"],
						json.employees[i]["roleCode"],
						json.employees[i]["roleInternalId"],
						json.employees[i]["roleDescription"],
						json.employees[i]["roleLevel"],
						json.employees[i]["businessUnit"],
						json.employees[i]["clockInCard"],
						json.employees[i]["laborType"],
						json.employees[i]["unionCode"],
						json.employees[i]["workGroupCode"],
						json.employees[i]["employeeClassCode"],
						json.employees[i]["locality"],
						json.employees[i]["allocationPlanCode"],
						json.employees[i]["countryLocalityCode"],
						json.employees[i]["workShiftChangeDate"],
						json.employees[i]["timeTableCode"],
						json.employees[i]["carrierCode"],
						json.employees[i]["ruralGroupCode"],
						json.employees[i]["contractEnd"],
						json.employees[i]["employeeType"],
						json.employees[i]["privateCitizen"],
						json.employees[i]["registrationDigit"],
						json.employees[i]["transferenceAdmissionDate"],
						json.employees[i]["dateOfSalaryChange"],
						json.employees[i]["email"],
						json.employees[i]["monthlyWorkingHours"],
						json.employees[i]["wageTableInternalId"],
						json.employees[i]["typeOfSalaryChange"]
		        	])
                };

            } catch (e) {
                dataset.addRow(new Array("Erro ao montar dataset", e));           
            }
        }
    } catch (e) {
        dataset.addRow(new Array("Erro ao consultar servidor", e));  
    }
    
	return dataset;
}

function onMobileSync(user) {

}