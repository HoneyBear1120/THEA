
export const PassportTemplate = {
    categoryId:"WD53qM-0ctmVIYRZAAAM",
    isRequestedCategory:false,
    titleFieldType:"text",
    formTitle:"Passport", 
    isPinned: false,
    template_name:'Passport',
    subTitle:"",
    icon:'category_assets/file-1627886059856.png',
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
                labelValue: "type",
                labelPlaceHolder: "type",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "issuing country",
                labelPlaceHolder: "issuing country",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "passport number",
                labelPlaceHolder: "passport number",
                valueFieldType: "number",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "full name",
                labelPlaceHolder: "full name",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "sex",
                labelPlaceHolder: "sex",
                valueFieldType: "options",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
                option:'sex'
              },
              {
                labelFieldType: "text",
                labelValue: "nationality",
                labelPlaceHolder: "nationality",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
              {
                labelFieldType: "text",
                labelValue: "issuing authority",
                labelPlaceHolder: "issuing authority",
                valueFieldType: "text",
                value: "",
                valuePlaceHolder: "new field",
                isActive: "true",
                isError:false,
                
                showDecrement:true,
              },
          // {
          //   labelFieldType: "text",
          //   labelValue: "date of birth",
          //   labelPlaceHolder: "yy-mm-dd",
          //   valueFieldType: "date",
          //   value: "",
          //   valuePlaceHolder: "new field",
          //   isActive: "true",
          //   isError:false,
            
          //   showDecrement:true,
          //   max:new Date().toISOString().slice(0, 10)
          // },
          {
            labelFieldType: "text",
            labelValue: "date of birth",
            labelPlaceHolder: "yyyy-mm-dd",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "yyyy-mm-dd",
            isActive: "true",
            isError:false,
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "place of birth",
            labelPlaceHolder: "place of birth",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "new field",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "issued on",
            labelPlaceHolder: "yyyy-mm-dd",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "yyyy-mm-dd",
            isActive: "true",
            isError:false,
            
            showDecrement:true,
          },
          {
            labelFieldType: "text",
            labelValue: "expiry date",
            labelPlaceHolder: "yyyy-mm-dd",
            valueFieldType: "text",
            value: "",
            valuePlaceHolder: "yyyy-mm-dd",
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
  
  
  