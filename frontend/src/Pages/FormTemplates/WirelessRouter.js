
export const WirelessRouterTemplate = {
    categoryId:"DgivfsTCd6sAt96qAAAU",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Wireless Router", 
    isPinned: false,
    template_name:'WirelessRouter',
    subTitle:"",
    icon:'category_assets/file-1627886345809.png',
    //main section starts over here.
    sections: [
      {
        titleFieldType: "text",
        value:"Section",
        id:"value",
        placeHolder: "Section",
        type:'text',
        sectionForm: [
            {
                labelFieldType: "text",
                labelValue: "base station name",
                labelPlaceHolder: "base station name",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
            {
                labelFieldType: "text",
                labelValue: "base station password",
                labelPlaceHolder: "base station password",
                valueFieldType: "password",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
          
              {
                labelFieldType: "text",
                labelValue: "server/IP adress",
                labelPlaceHolder: "server/IP adress",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "AirPort ID",
                labelPlaceHolder: "AirPort ID",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "network name",
                labelPlaceHolder: "network name",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "wireless security",
                labelPlaceHolder: "wireless security",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'wireless_security'
              },
              {
                labelFieldType: "text",
                labelValue: "wireless network protocol",
                labelPlaceHolder: "wireless network protocol",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "attached storage protocol",
                labelPlaceHolder: "attached storage protocol",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
          {
              labelFieldType: "text",
              labelValue: "",
              labelPlaceHolder: "custom",
              valueFieldType: "text",
              value: "",
              valuePlaceHolder: "new field",
              isActive: "true",
              isError:false,
              readOnly:false,
              showDecrement:false
            }
        ],
      },
      {
        
          titleFieldType: "text",
          value: "Attachment",
          placeHolder: "Attachment",
          type:'attachment',
          sectionForm: [
          
          ]
        },
        {
            
            titleFieldType: "text",
            value: "Section",
            placeHolder: "Section",
            type:'text',
            sectionForm: [
              {
                labelFieldType: "text",
                labelValue: "",
                labelPlaceHolder:"custom",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                showDecrement:false
              },
            ]
          },
          {
            
            titleFieldType: "text",
            value: "Section",
            placeHolder: "Section",
            type:'notes',
            sectionForm: [
              {
                labelFieldType:'notes',
                labelValue:"notes",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                showDecrement:false
              },
              {
                labelFieldType:'tags',
                labelValue:"tags",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                showDecrement:false
              }
            ]
          }  
  
    ]
  };
  
  
  