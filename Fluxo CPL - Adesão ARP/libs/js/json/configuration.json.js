Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Fluxo CPL - Adesão ARP","publishDate":"23/08/2018 10:29:20","pages":[{"id":"3aa6b61c-a076-41d0-8b3c-911352e306cd","name":"Diagrama 1","version":"1.0","author":"02395074101","image":"files\\diagrams\\Diagrama_1.png","isSubprocessPage":false,"elements":[{"id":"2d480947-1215-49bb-a88a-45192f21c57b","name":"ADESÃO A ATA DE REGISTRO DE PREÇO- ARP","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1540.4,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"9a796949-3e17-4760-9b17-07bbcbb2caa7","name":"Solicitação Órgão c/ requisitos para  ARP","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":139.0,"y":155.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"5adddf7c-339b-413c-a156-e25b55515c9c","name":"Analisar Solicitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":212.0,"y":140.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4160af92-86f6-4fbd-adbb-0ee54a84e1ca","name":"Ok?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":362.0,"y":150.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2979d4b7-ebdd-42c8-83f9-904143487173","name":"Abrir Processo no SEI e Anexar Docs Comprobatórios","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":324.5,"y":230.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ff89aab6-e6ad-4ac2-bc25-31a6659b55a8","name":"Selecionar ARP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":470.0,"y":230.0}],"radius":0.0,"height":60.0,"width":68.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2c61241b-dbf1-4be8-97fa-2b04217d5bd8","name":"Realizar Pesquisa de Mercado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":571.0,"y":230.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"34a1a59a-bb66-4f93-850d-1942af61a0ab","name":"A ARP é a mais barata?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":711.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a18e8025-c784-4a70-b5d3-d66f6ae54153","name":"Verificar Regularidade e se aceita adesão","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":806.0,"y":230.0}],"radius":0.0,"height":60.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f48cfde4-0c99-4146-9d86-af1f587f1f63","name":"Ok?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":962.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"880d7966-1f0d-4b83-99d1-90bdefe5b8a0","name":"Solicitar autorização do  Fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1083.0,"y":230.0}],"radius":0.0,"height":60.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f62811ca-0fbb-4cb2-87c2-fb8d0cad3f57","name":"Autorizou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1256.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"bbd742e1-8002-44b9-9ae0-7eb7348956bf","name":"Solicitar autorização do Órgão Gerenciador pelo SIASG","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1365.0,"y":230.0}],"radius":0.0,"height":60.0,"width":155.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"143a9c3d-5261-453a-a091-f66c17633b5e","name":"Autorizou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1569.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"2a911712-9c46-452a-9fc2-1a3727ab5a84","name":"Inserir no SEI  o Edital e anexos licitação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1670.0,"y":230.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8f9d381-53ed-445d-b68b-a1e73fc8d03c","name":"Confeccionar o Termo de Referência e Minuta de Contrato se for o caso","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1801.0,"y":230.0}],"radius":0.0,"height":60.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a84320e2-9d12-4b15-a597-e7a4350e3f75","name":"Confeccionar Termo de Responsabilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1819.0,"y":350.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d358f066-f4b5-4e93-bf60-686dbea1467d","name":"Analisar e Assinar Termo de Referência e Termo de Responsabilidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1791.0,"y":587.0}],"radius":0.0,"height":60.0,"width":160.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dfdda4b4-2d8f-4ce0-a674-19234dfad692","name":"Assinou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2008.0,"y":661.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"669e884e-555a-410e-85a6-2a82b8f86d40","name":"Corrigir o necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1983.0,"y":431.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dcad2fa4-422f-4112-af17-27737e43fc76","name":"Confeccionar Despacho de Aprovação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2140.5,"y":231.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8fc0e3bf-4c13-42ac-bf0f-7f826cf4a3fa","name":"Aprovar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2153.0,"y":1026.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8a5cc69d-2c41-4b69-a3b7-6eba791e64aa","name":"Aprovou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2339.0,"y":1085.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0ad5b62b-a48b-45b4-aadb-26486bf43dbe","name":"Corrigir  o necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2314.0,"y":428.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8af5c86c-e03c-4116-9375-9ac101cd4223","name":"Solicitar Crédito Orçamentário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2486.0,"y":220.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d02c1a27-139f-47e2-a68a-7bbb7ae5b321","name":"Aguardar Crédito","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2625.0,"y":235.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"cc1bff9f-19bb-4981-9396-a9143eb6a372","name":"Confeccionar Despacho de Adequação Orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2688.0,"y":220.0}],"radius":0.0,"height":60.0,"width":132.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3ea04a4b-529d-44b0-bdd1-ecf4efbe269c","name":"Assinar Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2709.0,"y":808.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8e81805a-a721-4cb8-8236-43b496aaaacc","name":"OK?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2854.0,"y":866.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"ac81e87a-63da-4811-99fb-19242d28f19d","name":"Corrigir o necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2829.0,"y":436.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5c1cf0f6-c98a-48f0-b0ae-5ff47648c0cd","name":"Confeccionar Check List","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2968.0,"y":206.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8931fc47-c7ca-494d-8dc2-92c874f7778c","name":"Confeccionar Despacho Análise Jurídica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3087.0,"y":206.0}],"radius":0.0,"height":60.0,"width":92.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"883bece9-305d-479d-a5d9-c4952dc719f3","name":"Assinar Despacho ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3088.0,"y":997.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0e8b0d9b-9cfb-4283-aebd-8326b3cbf1b2","name":"Assinou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3113.0,"y":1100.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d13251f6-9e8b-4df2-b5c7-f0e7c39b0934","name":"Corrigir o necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3199.0,"y":415.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"37f1ef3f-bca4-44a5-a268-42e0230a94bb","name":"Emitir Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3088.0,"y":1255.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eb7e36b9-71a4-449f-b470-b7c1c1a78b5d","name":"Apontamentos?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3280.0,"y":223.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"7c8afe4b-8a34-4fb7-b545-9bd77ade9d9d","name":"Corrigir apontamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3366.0,"y":213.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"12ed1c2f-1cee-4b01-b523-089dcc56c84a","name":"Confeccionar Despacho de Atendimento aos apontamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3508.0,"y":213.0}],"radius":0.0,"height":60.0,"width":132.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d436170-e4f9-4407-87b5-e8d1ce81b58e","name":"Confeccionar Chek list final","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3676.081,"y":213.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"29991b59-2e39-4f75-9ad8-0fb2740d3ebb","name":"Confeccionar Despacho de Autorização de Empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3793.0,"y":213.0}],"radius":0.0,"height":60.0,"width":147.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"30ea6c78-176f-4d4e-9d40-16e2afd7f6bd","name":"Autorizar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3821.5,"y":1005.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2db345a0-bd8d-4e61-b12a-480102373561","name":"Autorizado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":3972.0,"y":1095.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"02c660c5-6cb4-4367-b176-ffe48c0bcee0","name":"Corrigir o necessário","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3947.0,"y":435.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c4e35de3-18b6-4361-915e-b9c54cfcd149","name":"Emitir Empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3947.0,"y":1447.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e241096d-2d4c-43e4-9a93-8970ae6702f0","name":"Tem Contrato?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":4093.0,"y":1457.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"c9053e6e-0d59-4ab6-8dc9-690518d20d4b","name":"Providenciar a assinatura do contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4068.0,"y":218.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8406c54f-bba7-4ba6-a476-b07896b5b88e","name":"Publicar  Contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4209.0,"y":218.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0cfd93fa-11b2-478e-b9cb-f60c8680a3af","name":"Enviar GESCON","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":4342.0,"y":218.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b6fd1ddc-d048-43fe-acd0-a584272caaab","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":4483.0,"y":233.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"876e43af-0a99-49b3-8b15-2ec83be68243","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":4202.0,"y":1462.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cd696442-30f8-4829-a972-5d3ef72f4148","name":"Devolver Solicitação para órgão demandante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":312.0,"y":57.0}],"radius":0.0,"height":60.0,"width":140.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2324821c-3717-4da8-9a6b-efa29ce61a19","name":"Fim","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":498.0,"y":72.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"1115c464-57f6-48c6-abaf-0f6bd33265df","name":"Projeto Básico - Modelo ARP 1","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":237.0,"y":219.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"e028051c-144b-4602-ab2a-bbde4f3a2a70","name":"Manual ARP 1","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1422.0,"y":315.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"95f8b804-42f5-4305-b561-611a0c0a3db1","name":"Modelo ARP 1","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1119.0,"y":316.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"aa0b75b7-7d34-46e6-bf8d-e2c28755a5be","name":"Modelo ARP 2","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1849.0,"y":150.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"0ac2e966-6f6e-487f-8ea0-3acef95a2f46","name":"Modelo ARP 4","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2175.0,"y":154.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"5e7d5a2e-2715-44db-b911-e06ff1e17320","name":"Modelo ARP 3","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1742.0,"y":355.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"70fcbc69-ff39-4633-a34e-73185775e7e9","name":"Modelo ARP 5","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2510.0,"y":144.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"cd3503fc-2c92-4fb3-b4a3-2ba105136a0d","name":"Modelo ARP 6","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":3113.0,"y":130.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"d1d5c61d-721d-4373-8e57-b27a96766e07","name":"Modelo ARP 7","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":3554.0,"y":302.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"9cb50239-0605-4c57-b0a0-f23e1698bb5f","name":"Manual ARP 2","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":4232.0,"y":142.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"48016902-7fbd-4bd7-8fbb-ac6afb02d841","name":"Modelo ARP 8","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":3847.0,"y":139.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"2e483832-9e4d-4510-98ee-c85316500264","name":"Check List 1","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":2992.0,"y":132.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"6d1b10c4-dab8-46d8-8b6f-f59fe21fc0d7","name":"Modelo ARP 9","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":4367.0,"y":145.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"id":"DataObjectState","name":"Estado","value":"","type":"text"}]},{"id":"b180f173-e574-48c6-bee0-af1067dd793f","name":"Comissão Permanente de Licitação - CPL","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":511.6,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"30c35f93-10ca-4f49-a17d-f5c1ca51394d","name":"Chefe de Recursos Logísticos - RL","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":531.6}],"radius":0.0,"height":211.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d491af59-5a27-4b79-9b77-ba422af28c72","name":"SIOFI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":742.6}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"26da0a26-da65-44a1-adb0-07cd3045b532","name":"Superintendente -SAMF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":942.6}],"radius":0.0,"height":242.4,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"91a93112-5a7e-4790-8702-c052908cb508","name":"Procuradoria da Fazenda Nacional - PFN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1185.0}],"radius":0.0,"height":175.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"55a3aa5d-ca6a-48d0-91ec-2f9f3a92b94d","name":"FINANCEIRO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1360.0}],"radius":0.0,"height":200.400024,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"3aa6b61c-a076-41d0-8b3c-911352e306cd","containerName":"Diagrama 1","isSubprocess":false,"elements":[{"id":"2d480947-1215-49bb-a88a-45192f21c57b","value":"ADESÃO A ATA DE REGISTRO DE PREÇO- ARP"},{"id":"b180f173-e574-48c6-bee0-af1067dd793f","value":"Comissão Permanente de Licitação - CPL"},{"id":"30c35f93-10ca-4f49-a17d-f5c1ca51394d","value":"Chefe de Recursos Logísticos - RL"},{"id":"d491af59-5a27-4b79-9b77-ba422af28c72","value":"SIOFI"},{"id":"26da0a26-da65-44a1-adb0-07cd3045b532","value":"Superintendente -SAMF"},{"id":"91a93112-5a7e-4790-8702-c052908cb508","value":"Procuradoria da Fazenda Nacional - PFN"},{"id":"55a3aa5d-ca6a-48d0-91ec-2f9f3a92b94d","value":"FINANCEIRO"},{"id":"1115c464-57f6-48c6-abaf-0f6bd33265df","value":"Projeto Básico - Modelo ARP 1"},{"id":"e028051c-144b-4602-ab2a-bbde4f3a2a70","value":"Manual ARP 1"},{"id":"95f8b804-42f5-4305-b561-611a0c0a3db1","value":"Modelo ARP 1"},{"id":"aa0b75b7-7d34-46e6-bf8d-e2c28755a5be","value":"Modelo ARP 2"},{"id":"0ac2e966-6f6e-487f-8ea0-3acef95a2f46","value":"Modelo ARP 4"},{"id":"5e7d5a2e-2715-44db-b911-e06ff1e17320","value":"Modelo ARP 3"},{"id":"70fcbc69-ff39-4633-a34e-73185775e7e9","value":"Modelo ARP 5"},{"id":"cd3503fc-2c92-4fb3-b4a3-2ba105136a0d","value":"Modelo ARP 6"},{"id":"d1d5c61d-721d-4373-8e57-b27a96766e07","value":"Modelo ARP 7"},{"id":"9cb50239-0605-4c57-b0a0-f23e1698bb5f","value":"Manual ARP 2"},{"id":"48016902-7fbd-4bd7-8fbb-ac6afb02d841","value":"Modelo ARP 8"},{"id":"2e483832-9e4d-4510-98ee-c85316500264","value":"Check List 1"},{"id":"6d1b10c4-dab8-46d8-8b6f-f59fe21fc0d7","value":"Modelo ARP 9"},{"id":"9a796949-3e17-4760-9b17-07bbcbb2caa7","value":"Solicitação Órgão c/ requisitos para  ARP"},{"id":"5adddf7c-339b-413c-a156-e25b55515c9c","value":"Analisar Solicitação"},{"id":"4160af92-86f6-4fbd-adbb-0ee54a84e1ca","value":"Ok?"},{"id":"2979d4b7-ebdd-42c8-83f9-904143487173","value":"Abrir Processo no SEI e Anexar Docs Comprobatórios"},{"id":"ff89aab6-e6ad-4ac2-bc25-31a6659b55a8","value":"Selecionar ARP"},{"id":"f48cfde4-0c99-4146-9d86-af1f587f1f63","value":"Ok?"},{"id":"880d7966-1f0d-4b83-99d1-90bdefe5b8a0","value":"Solicitar autorização do  Fornecedor"},{"id":"a18e8025-c784-4a70-b5d3-d66f6ae54153","value":"Verificar Regularidade e se aceita adesão"},{"id":"bbd742e1-8002-44b9-9ae0-7eb7348956bf","value":"Solicitar autorização do Órgão Gerenciador pelo SIASG"},{"id":"f62811ca-0fbb-4cb2-87c2-fb8d0cad3f57","value":"Autorizou?"},{"id":"143a9c3d-5261-453a-a091-f66c17633b5e","value":"Autorizou?"},{"id":"2a911712-9c46-452a-9fc2-1a3727ab5a84","value":"Inserir no SEI  o Edital e anexos licitação"},{"id":"f8f9d381-53ed-445d-b68b-a1e73fc8d03c","value":"Confeccionar o Termo de Referência e Minuta de Contrato se for o caso"},{"id":"dcad2fa4-422f-4112-af17-27737e43fc76","value":"Confeccionar Despacho de Aprovação"},{"id":"d358f066-f4b5-4e93-bf60-686dbea1467d","value":"Analisar e Assinar Termo de Referência e Termo de Responsabilidade"},{"id":"dfdda4b4-2d8f-4ce0-a674-19234dfad692","value":"Assinou?"},{"id":"669e884e-555a-410e-85a6-2a82b8f86d40","value":"Corrigir o necessário"},{"id":"a84320e2-9d12-4b15-a597-e7a4350e3f75","value":"Confeccionar Termo de Responsabilidade"},{"id":"8fc0e3bf-4c13-42ac-bf0f-7f826cf4a3fa","value":"Aprovar"},{"id":"8a5cc69d-2c41-4b69-a3b7-6eba791e64aa","value":"Aprovou?"},{"id":"0ad5b62b-a48b-45b4-aadb-26486bf43dbe","value":"Corrigir  o necessário"},{"id":"8af5c86c-e03c-4116-9375-9ac101cd4223","value":"Solicitar Crédito Orçamentário"},{"id":"d02c1a27-139f-47e2-a68a-7bbb7ae5b321","value":"Aguardar Crédito"},{"id":"8931fc47-c7ca-494d-8dc2-92c874f7778c","value":"Confeccionar Despacho Análise Jurídica"},{"id":"883bece9-305d-479d-a5d9-c4952dc719f3","value":"Assinar Despacho "},{"id":"37f1ef3f-bca4-44a5-a268-42e0230a94bb","value":"Emitir Parecer"},{"id":"0e8b0d9b-9cfb-4283-aebd-8326b3cbf1b2","value":"Assinou?"},{"id":"d13251f6-9e8b-4df2-b5c7-f0e7c39b0934","value":"Corrigir o necessário"},{"id":"eb7e36b9-71a4-449f-b470-b7c1c1a78b5d","value":"Apontamentos?"},{"id":"7c8afe4b-8a34-4fb7-b545-9bd77ade9d9d","value":"Corrigir apontamentos"},{"id":"12ed1c2f-1cee-4b01-b523-089dcc56c84a","value":"Confeccionar Despacho de Atendimento aos apontamentos"},{"id":"29991b59-2e39-4f75-9ad8-0fb2740d3ebb","value":"Confeccionar Despacho de Autorização de Empenho"},{"id":"30ea6c78-176f-4d4e-9d40-16e2afd7f6bd","value":"Autorizar"},{"id":"2db345a0-bd8d-4e61-b12a-480102373561","value":"Autorizado?"},{"id":"02c660c5-6cb4-4367-b176-ffe48c0bcee0","value":"Corrigir o necessário"},{"id":"c4e35de3-18b6-4361-915e-b9c54cfcd149","value":"Emitir Empenho"},{"id":"e241096d-2d4c-43e4-9a93-8970ae6702f0","value":"Tem Contrato?"},{"id":"c9053e6e-0d59-4ab6-8dc9-690518d20d4b","value":"Providenciar a assinatura do contrato"},{"id":"8406c54f-bba7-4ba6-a476-b07896b5b88e","value":"Publicar  Contrato"},{"id":"0cfd93fa-11b2-478e-b9cb-f60c8680a3af","value":"Enviar GESCON"},{"id":"b6fd1ddc-d048-43fe-acd0-a584272caaab","value":"Fim"},{"id":"876e43af-0a99-49b3-8b15-2ec83be68243","value":"Fim"},{"id":"cd696442-30f8-4829-a972-5d3ef72f4148","value":"Devolver Solicitação para órgão demandante"},{"id":"2324821c-3717-4da8-9a6b-efa29ce61a19","value":"Fim"},{"id":"9d436170-e4f9-4407-87b5-e8d1ce81b58e","value":"Confeccionar Chek list final"},{"id":"2c61241b-dbf1-4be8-97fa-2b04217d5bd8","value":"Realizar Pesquisa de Mercado"},{"id":"34a1a59a-bb66-4f93-850d-1942af61a0ab","value":"A ARP é a mais barata?"},{"id":"cc1bff9f-19bb-4981-9396-a9143eb6a372","value":"Confeccionar Despacho de Adequação Orçamentária"},{"id":"3ea04a4b-529d-44b0-bdd1-ecf4efbe269c","value":"Assinar Despacho"},{"id":"8e81805a-a721-4cb8-8236-43b496aaaacc","value":"OK?"},{"id":"ac81e87a-63da-4811-99fb-19242d28f19d","value":"Corrigir o necessário"},{"id":"5c1cf0f6-c98a-48f0-b0ae-5ff47648c0cd","value":"Confeccionar Check List"},{"id":"e808fee7-9a9e-4204-bcae-867f17868d0f"},{"id":"38db7237-e956-4266-94b8-f78fe6d55025"},{"id":"2ccd721e-f18c-49bd-b164-efaa1347331c"},{"id":"1cffd16a-d7ef-4302-967b-5f6a7699d0c9"},{"id":"a8f9dc09-5c4b-42b6-90fa-2d22ea46882b"},{"id":"208b2960-703b-4b09-a487-3a005b0ab72f"},{"id":"18b9d6ff-7ff3-4e37-bd61-618ea75b3bf4"},{"id":"07f4c444-b6bd-47ee-9f73-91796389ed09"},{"id":"1fa28f10-78cc-4edd-bc24-73e796b8136c"},{"id":"cffe8ccf-4677-4c0f-8889-2c3682665497"},{"id":"5539ea07-076f-4825-a5e1-e25caf4d5b24"},{"id":"62418103-f156-4b16-beb1-866f61ff88c0"},{"id":"aebd0620-9ccd-4dc1-9652-98a97ebd760c"}]}]}