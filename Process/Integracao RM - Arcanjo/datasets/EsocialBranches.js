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
                endpoint: '/api/rh/esocial/v1/EsocialBranches',
                method : 'get'
             }

        var vo = clientService.invoke(JSON.stringify(data));
        var result = vo.getResult();

        log.info("############# Consultou Informações da Empresa")

        if(result== null || result.isEmpty()){
	        throw new Exception("Retorno está vazio");
        }else{                      
                                    
            try{        
                var json = JSON.parse(result);

                log.info("############# Objeto json: ");
                log.dir(json);

                dataset.addColumn('branchCode');
                dataset.addColumn('branchDescription');

                log.info("############# Adicionou Colunas");
                
                for (var i in json.items){   

                    log.info("############# Entrou no For")
                    
                	dataset.addRow([
		        	                json.items[i]["branchCode"],
		        	                json.items[i]["branchDescription"],
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