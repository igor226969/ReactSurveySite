const defaultSurveyJSON = {
    /** Create survey UI here: https://surveyjs.io/create-survey and paste JSON here */
    "title": "Survey Example",
    "description": "Survey example using react",
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Enter your name",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "question2",
        "title": "Enter your surname",
        "isRequired": true
       },
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Do you like surveys?",
        "isRequired": true,
        "choices": [
         {
          "value": "1",
          "text": "Yes"
         },
         {
          "value": "0",
          "text": "No"
         }
        ]
       }
      ]
     }
    ]
   };
const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
};
const defaultSurveyDATA = {
    /** JSON DATA IN HERE TO VIEW ANSWERS INPUTTED IN SURVEY */
}

const defaultSurveyConfig = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON
}

export default defaultSurveyConfig