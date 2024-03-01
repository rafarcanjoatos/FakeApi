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
                endpoint: '/api/ctb/v1/costcenters',
                method : 'get'
             }

        var vo = clientService.invoke(JSON.stringify(data));
        var result = vo.getResult();

        log.info("############# Consultou Centro de Custos")

        if(result== null || result.isEmpty()){
	        throw new Exception("Retorno está vazio");
        }else{                      
                                    
            try{        
                var json = JSON.parse(result);
                
                log.info("############# Objeto json: ");
                log.dir(json);            
                
                dataset.addColumn('CompanyId');
                dataset.addColumn('BranchId');
                dataset.addColumn('CompanyInternalId');
                dataset.addColumn('Id');
                dataset.addColumn('Code');
                dataset.addColumn('InternalId');
                dataset.addColumn('RegisterSituation');
                dataset.addColumn('Name');
                dataset.addColumn('ShortCode');
                dataset.addColumn('SPED');
                dataset.addColumn('AllowEntry');
                dataset.addColumn('Class');
                dataset.addColumn('TopCode');
                dataset.addColumn('CreateDate');
                dataset.addColumn('Accountable');
                dataset.addColumn('recordCreatedOn');
                dataset.addColumn('recordModifiedOn');

                log.info("############# Adicionou Colunas");
                
                for (var i in json.items){   

                    log.info("############# Entrou no For")
                    
                	dataset.addRow([
		        	                json.items[i]["CompanyId"],
		        	                json.items[i]["BranchId"],
		        	                json.items[i]["CompanyInternalId"],
		        	                json.items[i]["Id"],
		        	                json.items[i]["Code"],
		        	                json.items[i]["InternalId"],
		        	                json.items[i]["RegisterSituation"],
		        	                json.items[i]["Name"],
		        	                json.items[i]["ShortCode"],
		        	                json.items[i]["SPED"],
		        	                json.items[i]["AllowEntry"],
		        	                json.items[i]["Class"],
		        	                json.items[i]["TopCode"],
		        	                json.items[i]["CreateDate"],
		        	                json.items[i]["Accountable"],
		        	                json.items[i]["recordCreatedOn"],
		        	                json.items[i]["recordModifiedOn"]
		        	              ]
                	)
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

