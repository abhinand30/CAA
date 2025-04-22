// import CAALogo from 'images/logo/caa-logo.svg'
// import DigitalLogo from 'images/logo/qda-logo.png';
// import qatarLogo from 'images/logo/state-qatar-logo.svg';

// const headerImageArray=[
//     {id:1,src:CAALogo,alt:'Civil Aviation Authority logo'},
//     {id:2,src:DigitalLogo,alt:'qatar digital governmanet logo'},
//     {id:3,src:qatarLogo,alt:'state qatar logo'},
// ];

const tabArray = [
    {
        id: 1, tab: 'Application Information',
        fields: [
            { name: 'name', types: 'text', label: 'Name' },
            { name: 'email', types: 'text', label: 'email address' },
            { name: 'city', types: 'text', label: 'city' },
            { name: 'country', types: 'select', options: ['India', 'Qatar', 'KSA', 'UAE', 'USA'] },
            { name: 'phone', types: 'number', label: 'Mobile number' },
            { name: 'address', types: 'text', label: 'Address' },
            { name: 'pin', types: 'number', label: 'Pin' }
        ]
    },
    {
        id: 2, tab: 'Purpose and Documents',
        fields: [
            { name: 'purpose', types: 'select', options: ['Overfly', 'Business', 'Cargo', 'Technical', 'Medical', 'Training'], },
            {
                overfly: [
                    { name: 'ATSRoute', types: 'text', label: 'Complete ATS Route' },
                ]
            },
            {
                business: [
                    { name: 'crewDetails', types: 'file', multiple: true, label: 'Crew Details' },
                    { name: 'passengerDetails', types: 'file', multiple: true, label: 'Passenger Details' },
                    { name: 'partyLetter', types: 'file', multiple: true, label: 'Copy of Receiving Party Letter' },
                    { name: 'signatureCard', types: 'file', multiple: false, label: 'Signature Card' },
                    { name: 'transferFlight', types: 'file', multiple: false, label: 'Transfer Flight confirmation' },
                    { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation' },
                ]
            },
            {
                cargo: [
                    { name: 'CR', types: 'file', multiple: false, label: 'Copy of CR' },
                    { name: 'healthCertificate', types: 'file', multiple: true, label: 'Health Certificate' },
                    { name: 'signatureCard', types: 'file', multiple: true, label: 'Signature Card' },
                    { name: 'consigneeLetter', types: 'file', multiple: true, label: 'Consignee letter' },
                    { name: 'airworthinessCertificate', types: 'file', multiple: true, label: 'Airworthiness Certificates' },
                    { name: 'airOperatorCertificate', types: 'file', multiple: false, label: 'Air Operator Certificates' },
                    { name: 'aircraftInsuranceCertificate', types: 'file', multiple: true, label: 'Aircraft Insurance Certificates' },
                    { name: 'noiseCertificate', types: 'file', multiple: false, label: 'Noise Certificates' },
                    { name: 'aircraftRegistrationCertificate', types: 'file', multiple: false, label: 'Aircraft Registration Certificates' },
                    { name: 'airwayBill', types: 'file', multiple: false, label: 'Airway Bill' },
                    { name: 'insuranceCertificate', types: 'file', multiple: false, label: 'Insurance Certificate' },
                    { name: 'permit', types: 'file', multiple: false, label: 'Import Permit' },
                    { name: 'dangerousGood', types: 'file', multiple: false, label: 'Dangerous Good' },
                    { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation' },
                ]
            },
            {
                technical: [
                    { name: 'maintenance Confirmation', types: 'file', multiple: false, label: 'Maintenance Confirmation' },
                    { name: 'crewDetails', types: 'file', multiple: false, label: 'Crew Details' },
                    { name: 'Crew Disembarkation', types: 'check', label: 'Crew Disembarkation' },
                    { name: 'hotelConfirmation', types: 'file', multiple: false, label: 'Hotel Confirmation' },//if yes Crew Disembarkation
                    { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation' },
                ]
            },
            {
                medical: [
                    { name: 'hospitalLetter', types: 'file', multiple: false, label: 'Letter from Hospital' },
                    { name: 'passengerDetails', types: 'file', multiple: false, label: 'Passenger Details' },
                    { name: 'groundHandling', types: 'text', label: 'Ground Handling Confirmation' },
                ]
            },
            {
                training: [
                    { name: 'transferFlight', types: 'file', multiple: false, label: 'Complete ATS Router' },
                    { name: 'Touch&GoNumber', types: 'file', multiple: false, label: 'Number of Touch & Go' },
                    { name: 'trainingTime', types: 'text', multiple: false, label: 'Time of Training' },
                    { name: 'groundHandling', types: 'text',isRequired:false, label: 'Ground Handling Confirmation' },
                ]
            },
        ]
    },
    {
        id: 3, tab: 'Additional Information',
        fields: [
            { name: 'additionalDetails', types: 'text', label: 'Additional details',isRequired:false, },
            { name: 'additionalAttachment', types: 'file',multiple:true, label: 'Additional attachment',isRequired:false, },
        ]
    },
    {
        id: 4, tab: 'Summary',
        fields: [
            { name: 'agreement', types: 'check', label: 'Agreement' }
        ]
    }
]



export { tabArray }