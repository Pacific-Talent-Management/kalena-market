drop table if exists likes cascade;
drop table if exists jobs cascade;


create table jobs (
    id serial,
    status varchar(100),
    critical boolean default false,
    title varchar(100),
    description varchar(500),
    open varchar(100),
    close varchar(100),
    pay varchar(10),
    location varchar(50),
    remote varchar(100),
    travel varchar(200),
    schedule varchar(100),
    duties JSON,
    conditions JSON,
    qualifications JSON,
    education varchar(700),
    additional JSON,
    primary key(id)
);

insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'1',
	'Army Reserve Administrator',
    	'This is a Military Technician position with the 9th Mission Support Command, 18th Medical Deployment Support Command located at Fort Shafter Flats, Hawaii.',
    	'11/07/2023',
    	'11/20/2023',
    	'GS 9',
    	'Fort Shafter, HI',
    	'No',
    	'Yes—as determined by the agency policy.',
    	'Full-time',
    	'["Manage the daily operations of a US Army Reserve units mission readiness program.", "Represent the US Army Reserve Troop Program Unit Commander in his/her absence.", "Perform as the record manager.", "Serve as the unit physical security coordinator.", "Review regulations and directives and implements changes in appropriate manner.", "Compile data and create products to present at briefings.", "Prepare and review command correspondence for content and accuracy.", "Manage unit and individual personnel and medical readiness.", "Execute the units supply and logistics program.", "Coordinate the management of unit and individual training readiness.", "Administer financial management program including Government Purchasing and Travel Card programs.", "Advise on pay, benefits, entitlements, incentives, and assist with correcting pay issues."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "THIS POSITION REQUIRES ACTIVE MEMBERSHIP AS A SOLDIER IN THE U.S. ARMY RESERVE (USAR).", "This position requires the incumbent to successfully complete the Unit Administrator Basic Course within 18 months of appointment.", "This position requires the incumbent to successfully complete the Unit Pay Administrator Course within 18 months of appointment.", "The duties of this position may require the incumbent to work evenings, nights, holidays, and/or weekends to include modification in shifts and/or tour of duty."]',
	'["Who May Apply: US Citizens: In order to qualify, you must meet the education and/or experience requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application.", "Specialized Experience: One year of specialized experience which includes providing administrative assistance in support of a military unit or military activity in one or more of the following areas: Unit or individual training, medical readiness, personnel actions, financial actions, supply, or logistics; performing day-to-day administrative functions; and preparing or reviewing written products. This definition of specialized experience is typical of work performed at the second lower grade/level position in the federal service (GS-07).", "OR", "Education: Masters or equivalent graduate degree or 2 full years of progressively higher level graduate education leading to such a degree in a field which demonstrates the knowledge, skills, and abilities necessary to do the work of the position, such as: Business Administration, Strategic Management and Organizational Design and Development.", "OR", "Combination of Education and Experience: A combination of education and experience may be used to qualify for this position as long as the computed percentage of the requirements is at least 100%. To compute the percentage of the requirements, divide your total months of experience by 12. Then divide the total number of completed graduate semester hours (or equivalent) beyond the first year (total graduate semester hours minus 18) by 18. Add the two percentages.", "You will be evaluated on the basis of your level of competency in the following areas: Administration and Management, Fundamentals and Operations of Military and Civilian Pay, Organizational Awareness, Technical Competence"]',
	'FOREIGN EDUCATION: If you are using education completed in foreign colleges or universities to meet the qualification requirements, you must show the education credentials have been evaluated by a private organization that specializes in interpretation of foreign education programs and such education has been deemed equivalent to that gained in an accredited U.S. education program; or full credit has been given for the courses at a U.S. accredited college or university. For further information, visit: http://www.ed.gov/about/offices/list/ous/international/usnei/us/edlite-visitus-forrecog.html',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year probationary period may be required.", "Direct Deposit of Pay is required.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a Human Capital and Resource Management Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay.", "Interagency Career Transition Assistance Program (ICTAP). If you are a Federal employee in the competitive service and your agency has notified you in writing that you are a displaced employee eligible for ICTAP consideration, you may receive selection priority for this position. To receive selection priority, you must: (1) meet ICTAP eligibility criteria (2) be rated well-qualified for the position and; (3) submit the appropriate documentation to support your ICTAP eligibility. To be considered well-qualified and receive selection priority applicants must satisfy all qualification requirements for the position and receive a score of 90 or above.", "Payment of Permanent Change of Station (PCS) costs is not authorized, based on a determination that a PCS move is not in the Government interest."]'
);

insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'1',
	'Heavy Mobile Equipment Repairer',
    	'This position is a Military Technician position with the 9th Mission Support Command, Branch Maintenance Activity 1, Equipment Concentration Site 168, United States Army Reserve Theater Support Group, Pacific located at Fort Richardson, Alaska.',
    	'11/07/2023',
    	'11/27/2023',
    	'WG 9',
    	'Fort Richardson, AK',
    	'No',
    	'Occasional travel - The business travel requirement is 15%.',
    	'Full-time',
    	'["Troubleshoot, repair, modify and maintain a variety of construction, industrial, combat, tactical and powered support equipment such as bulldozers, tractors, trucks, tracked recovery vehicles, ambulances, generators and forklifts.", "Provide coordinated logistical guidance and policies to subordinate units regarding logistical operations.", "Utilize current logistical systems to allocate and monitor funding requirements for logistical operations.", "Advise on logistics status and logistical support to achieve and maintain effective operational readiness status.", "Analyze maintenance policies and regulatory requirements to increase level of unit readiness.", "Maintain liaison with higher headquarters, U.S. Army Reserve Command (USARC) staff, and other Army Reserve (AR) Commands to ensure effective logistical support."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "THIS POSITION REQUIRES MEMBERHSIP IN THE U.S. ARMY RESERVES (USAR)", "This position requires a Secret Clearance."]',
	'["Who May Apply: Only applicants who meet one of the employment authority categories below are eligible to apply for this job. You will be asked to identify which category or categories you meet, and to provide documents which prove you meet the category or categories you selected.", "30 Percent or More Disabled Veterans, Current Department of Army Civilian Employees, Current Department of Defense (DOD) Civilian Employee (non-Army), Domestic Defense Industrial Base/Major Range and Test Facilities Base Civilian Personnel Workforce, Executive Order (E.O.) 12721, Interagency Career Transition Assistance Plan, Land Management Workforce Flexibility Act, Military Spouses, under Executive Order (E.O.) 13473, Non-Appropriated Fund Instrumentality (NAFI), Non-Department of Defense (DoD) Transfer, Office of Personnel Management (OPM) Interchange Agreement Eligible, People with Disabilities, Schedule A, Postal Service/Peace Corps and Other Unique, Authorities, Reinstatement, Veterans Employment Opportunity Act (VEOA) of 1998", "In order to qualify, you must meet the experience and/or education requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application", "Specialized Experience: One year of specialized experience which includes managing logistical programs to ensure full utilization of resources; developing plans to integrate logistical support of operations in the areas of supply, service, maintenance, transportation, and/or food service; conducting staff assistance visits and inspections to subordinate units; providing reports to higher echelons of command; utilizing current logistics and financial systems to monitor, input, and track supplies, equipment, and status of funds; and developing budget data to support supply, services, maintenance, transportation or food service funding requirements. This definition of specialized experience is typical of work performed at the second lower grade/level position in the federal service (GS-09).", "OR", "Education: Ph.D or equivalent doctoral degree or 3 full years of progressively higher level graduate education leading to such a degree or LL.M. in a field which demonstrates the knowledge, skills, and abilities necessary to do the work of the position, such as: Logistics, Advanced Supply Chain Management, Business Law, and Service Management.", "OR", "Combination of Education and Experience: A combination of education and experience may be used to qualify for this position as long as the computed percentage of the requirements is at least 100%. To compute the percentage of the requirements, divide your total months of experience by 12. Then divide the total number of completed graduate semester hours (or equivalent) beyond the second year (total graduate semester hours minus 36) by 18. Add the two percentages.", "You will be evaluated on the basis of your level of competency in the following areas: Computer Resources, Customer Service, Oral Communication, Problem Solving & Supply Support", "Time in Grade Requirement: Applicants who have held a General Schedule (GS) position within the last 52 weeks must have 52 weeks of Federal service at the next lower grade or equivalent (GS-???????09)."]',
	'FOREIGN EDUCATION: If you are using education completed in foreign colleges or universities to meet the qualification requirements, you must show the education credentials have been evaluated by a private organization that specializes in interpretation of foreign education programs and such education has been deemed equivalent to that gained in an accredited U.S. education program; or full credit has been given for the courses at a U.S. accredited college or university. For further information, visit: http://www.ed.gov/about/offices/list/ous/international/usnei/us/edlite-visitus-forrecog.html.',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year trial/probationary period may be required.", "Direct deposit of pay is required.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a(n) Logistics Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay or Local Market Supplement.", "Payment of Permanent Change of Station (PCS) costs is not authorized, based on a determination that a PCS move is not in the Government interest."]'
);


insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'0',
	'Logistics Management Specialist',
    	'This position is a Military Technician position with the 9th Mission Support Command, Headquarters Support Company, 411th Engineer Battalion located in Fort Shafter Flats, Hawaii.',
    	'11/25/2023',
    	'12/08/2023',
    	'GS 9',
    	'Fort Shafter, HI',
    	'No',
    	'Occasional travel - The business travel requirement is 10%',
    	'Full-time',
    	'["Serve as a Logistics management Specialist in an Army Reserve Battalion or equivalent size unit.", "Provide staff logistical support in areas such as supply, procurement, property accountability, transportation, equipment, maintenance, food service, and/or lodging.", "Review requisitions submitted through automated logistics systems.", "Plan for and direct activities concerned with supply distribution and use of unit equipment.", "Identify supply problem areas and determine required corrective action.", "Provide input to budget requests submitted by subordinate units for logistical requirements.", "Provide information to leadership on the findings of evaluations, reports, and summaries.", "Establish procedures for operation of the Command Supply Discipline Program (CSDP) and conduct training for subordinate elements."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "THIS POSITION REQUIRES MEMBERSHIP IN THE US ARMY RESERVE (USAR)."]',
	'["Who May Apply: US Citizens", "In order to qualify, you must meet the education and/or experience requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application.", "Specialized Experience: One year of specialized experience which includes developing and executing programs to ensure maximum utilization of logistical resources; provides guidance/assistance on logistical matters to units located within the organization; provide logistical support in areas of supply, procurement, property accountability, transportation, equipment, and/or maintenance/facilities; conducting staff visits; preparing special and recurring reports; and recommending the disposition or redistribution of excess equipment/materiel. This definition of specialized experience is typical of work performed at the second lower grade/level position in the federal service (GS-07).", "OR", "Education: Master\'s or equivalent graduate degree or 2 full years of progressively higher level graduate education leading to such a degree in a field which demonstrates the knowledge, skills, and abilities necessary to perform the work of the position, such as Logistics, Advanced Supply Chain Management, Business Law, and Service Management.", "OR", "Combination of Education and Experience: A combination of education and experience may be used to qualify for this position as long as the computed percentage of the requirements is at least 100%. To compute the percentage of the requirements, divide your total months of experience by 12. Then divide the total number of completed graduate semester hours (or equivalent) beyond the first year (total graduate semester hours minus 18) by 18. Add the two percentages.", "You will be evaluated on the basis of your level of competency in the following areas: Computer Resources, Customer Service, Oral Communication, Problem Solving, Supply Support & Training and Training Support"]',
	'FOREIGN EDUCATION: If you are using education completed in foreign colleges or universities to meet the qualification requirements, you must show the education credentials have been evaluated by a private organization that specializes in interpretation of foreign education programs and such education has been deemed equivalent to that gained in an accredited U.S. education program; or full credit has been given for the courses at a U.S. accredited college or university. For further information, visit: https://sites.ed.gov/international/recognition-of-foreign-qualifications/',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year probationary period may be required.", "Direct deposit of pay is required.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a Logistics Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay.", "Payment of Permanent Change of Station (PCS) costs is not authorized, based on a determination that a PCS move is not in the Government interest."]'
);
	

insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'1',
	'Safety & Occupational Health Specialist',
    	'This position is with the 3rd Multi-Domain Task Force located on Fort Shafter, Hawaii.',
    	'12/04/2023 ',
    	'12/18/2023',
    	'GS 12',
    	'Fort Shafter, HI',
    	'No',
    	'25% or less - This position has a Temporary Duty (TDY) or business travel requirement of 25% of the time.',
    	'Full-time',
    	'["Responsible for the management of ground and tactical safety programs for the 3rd Multi-Domain Task Force (3MDTF).", "Plan, organize, coordinate, and provide oversight for the Task Force safety program in accordance with established regulations.", "Advise the MDTF Commander on Occupational Safety and Health program management.", "Coordinate unit safety activities with other safety programs.", "Provide leadership, guidance and advice to staff.", "Direct and advise mishap investigation boards and make recommendations for specific investigative techniques to complete final report.", "Perform Risk analysis of tactical exercises and evaluates specific countermeasures.", "Investigate and analyze material damage, personal injury accidents, and cases of occupational illnesses."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "Must be able to obtain and maintain a Secret security clearance.", "This is an Emergency Essential (E-E) position subject to deployment. May be required to participate in readiness exercises and training.", "May be required to work some overtime to include some weekends and holidays while geographically working at the Fort Shafter worksite.", "Requires frequent deployment under field conditions. Under crisis or deployed operations to foreign countries, may be required to work expanded hours, 7-day workweek, and extended duty days.", "Must pass a pre-employment physical exam.", "Must be able to obtain and maintain a valid State driver’s license.", "Training and certification in accordance with the FC-12 ACTEDS Training Plan commensurate with the identified grade level is required for personnel filling these positions."]',
	'["Who May Apply: Only applicants who meet one of the employment authority categories below are eligible to apply for this job. You will be asked to identify which category or categories you meet, and to provide documents which prove you meet the category or categories you selected.", "See Proof of Eligibility(https://portal.chra.army.mil/hr_public?id=kb_article&sysparm_article=KB0016281) for an extensive list of document requirements for all employment authorities.", "- Current Department of Army Civilian Employees", "- Current Department of Defense (DOD) Civilian Employee (non-Army)", "- Domestic Defense Industrial Base/Major Range and Test Facilities Base Civilian Personnel Workforce", "- Interagency Career Transition Assistance Plan", "- Land Management Workforce Flexibility Act", "- Military Spouses, under Executive Order (E.O.) 13473", "- Priority Placement Program, DoD Military Reserve (MR) and National Guard (NG) Technician Eligible", "- Priority Placement Program, DoD Military Spouse Preference (MSP) Eligible", "- Priority Placement Program, DoD MR and NG Preference Eligible Tech Receiving Disability Retirement", "- Priority Placement Program, DoD Retained Grade Preference Eligible", "- Veterans Employment Opportunity Act (VEOA) of 1998", "In order to qualify, you must meet the experience requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application. Additional information about transcripts is in this document(https://portal.chra.army.mil/hr_public?id=kb_article&sysparm_article=KB0016283).", "Specialized Experience: One year of specialized experience which includes resolving technical matters regarding occupational safety and health requirements; inspecting workplaces, processes, products, and safety systems for compliance with safety and occupational health policies; and identify potential safety hazards. This definition of specialized experience is typical of work performed at the next lower grade/level position in the federal service (GS-11).", "You will be evaluated on the basis of your level of competency in the following areas:", "- Accident/Mishap and Hazard Investigation and Reporting", "- Accountability", "- Administration and Management", "- Oral Communication", "Time in Grade Requirement: Applicants who have held a General Schedule (GS) position within the last 52 weeks must have 52 weeks of Federal service at the next lower grade or equivalent (GS-11)."]',
	'Some federal jobs allow you to substitute your education for the required experience in order to qualify. For this job, you must meet the qualification requirement using experience alone--no substitution of education for experience is permitted.',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year trial/probationary period may be required.", "Direct deposit of pay is required.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a(n) Installations Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay or Local Market Supplement.", "When you perform a Civilian Permanent Change of Station (PCS) with the government, the Internal Revenue Service (IRS) considers the majority of your entitlements to be taxable. Visit https://www.dfas.mil/civilianemployees/civrelo/Civilian-Moving-Expenses-Tax-Deduction/ for more information.", "Permanent Change of Station (PCS) allowances may be authorized, subject to the provisions of the Joint Travel Regulations and an agency determination that a PCS move is in the Government Interest.", "Recruitment, Relocation, and Retention incentives may be authorized."]'
);

insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'0',
	'Management and Program Analyst (Support Operations)',
    	'This position is located on Fort Shafter, Hawaii, which is near the Historical Palm Circle on the island of Oahu. For information about Hawaii, the island of Oahu and US Army Pacific, visit: http://www.hvcb.org and https://www.army.mil/usarpac',
    	'12/01/2023',
    	'12/07/2023',
    	'GS 14',
    	'Fort Shafter, HI',
    	'No',
    	'Not required',
    	'Full-time',
    	'["Responsible for providing expert technical and analytical advice relating to the program management of contracting activities and related procurement strategies.", "Maintain awareness of the Command’s requirements and to give expert advice, and recommendations to senior leadership.", "Uphold standards and processes within the contracting activities undertaken by the command.", "Conduct evaluations in support of the command strategic goals and in support of the organization’s budget formulation and execution.", "Provide information on the impact of alternative strategies, identify cost savings, institute performance measures and management processes that monitor performance, quality of deliverables and return on investment."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "Must be able to obtain and maintain a Secret security clearance."]',
	'["Who May Apply: Only applicants who meet one of the employment authority categories below are eligible to apply for this job. You will be asked to identify which category or categories you meet, and to provide documents which prove you meet the category or categories you selected.", "- Current Department of Army Civilian Employees", "- Interagency Career Transition Assistance Plan", "- Military Spouses, under Executive Order (E.O.) 13473", "- Priority Placement Program, DoD Military Spouse Preference (MSP) Eligible", "In order to qualify, you must meet the experience requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application.", "Specialized Experience: One year of specialized experience which includes experience managing or overseeing an organizations contracting activities; developing performance work statements, acquisition plans, acquisition strategies, and/or contract documents. This definition of specialized experience is typical of work performed at the next lower grade/level position in the federal service (GS-13).", "You will be evaluated on the basis of your level of competency in the following areas:", "- Oral Communication", "- Strategic Planning", "- Technical Competence", "Time in Grade Requirement: Applicants who have held a General Schedule (GS) position within the last 52 weeks must have 52 weeks of Federal service at the next lower grade or equivalent (GS-13)."]',
	'Some federal jobs allow you to substitute your education for the required experience in order to qualify. For this job, you must meet the qualification requirement using experience alone--no substitution of education for experience is permitted.',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year trial/probationary period may be required.", "Direct deposit of pay is required.", "This position requires you to submit a Public Financial Disclosure Report (OGE 278) or a Confidential Financial Disclosure Report (OGE450) upon entry, and annually thereafter.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a(n) Contracting Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay or Local Market Supplement.", "When you perform a Civilian Permanent Change of Station (PCS) with the government, the Internal Revenue Service (IRS) considers the majority of your entitlements to be taxable. Visit https://www.dfas.mil/civilianemployees/civrelo/Civilian-Moving-Expenses-Tax-Deduction/ for more information.", "Permanent Change of Station (PCS) allowances may be authorized, subject to the provisions of the Joint Travel Regulations and an agency determination that a PCS move is in the Government Interest.", "Recruitment/Relocation/Retention incentives may be authorized.", "This position is not open to VEOA eligible applicants. Veterans Employment Opportunities Act of 1998 (VEOA) mandates that eligible veterans be given career or career conditional appointments. Temporary or term appointments cannot be offered.", "Position may be filled as term appointment not to exceed 3 years, if the candidate is not a current permanent Army employee. Term appointments may be extended up to a maximum of eight years at the discretion of management and in accordance with applicable regulations; may be converted to permanent status without further competition at the discretion of management and if the incumbent meets the eligibility criteria for specific appointment authorities (i.e., Reinstatement, 30% Disabled Veterans, etc.).", "Position may be filled as a temporary promotion not to exceed 3 years by a current permanent Army employee. Temporary promotions or reassignments may be extended for up to a maximum of five years, and may be made permanent without further competition."]'
);


insert into jobs (
	status,
	critical, 
	title, 
	description, 
	open, 
	close, 
	pay, 
	location, 
	remote, 
	travel, 
	schedule, 
	duties,
	conditions,
	qualifications,
	education,
	additional
	) values ( 
	'published',
	'0',
	'Human Resources Specialist (Military)',
    	'This position is with the 9th Mission Support Command, Theater Support Group, Directorate of Human Resources located at Fort Shafter Flats, Hawaii.',
    	'12/04/2023',
    	'12/18/2023',
    	'GS 11',
    	'Ford Shafter, HI',
    	'No',
    	'Occasional travel - The business travel requirement is 15%.',
    	'Full-time',
    	'["Serve as a Human Resources Specialist (Military) in an Army Reserve Brigade or equivalent sized unit.", "Provide guidance and on military personnel management to subordinate elements within the organization.", "Coordinate and execute the unit’s military personnel management activities.", "Provide training and briefings on current and proposed policies for staff within the headquarters and subordinate elements.", "Establish criteria to monitor and evaluate program efficiency and effectiveness ensuring compliance with regulatory guidance.", "Develop innovative variations of existing approaches and methods to resolve complex situations."]',
    	'["Appointment may be subject to a suitability or fitness determination, as determined by a completed background investigation.", "THIS POSITION REQUIRES ACTIVE MEMBERSHIP AS A SOLDIER IN THE U.S. ARMY RESERVE (USAR)."]',
	'["Who May Apply: Only applicants who meet one of the employment authority categories below are eligible to apply for this job. You will be asked to identify which category or categories you meet, and to provide documents which prove you meet the category or categories you selected.", "- 30 Percent or More Disabled Veterans", "- Current Department of Army Civilian Employees", "- Current Department of Defense (DOD) Civilian Employee (non-Army)", "- Domestic Defense Industrial Base/Major Range and Test Facilities Base Civilian Personnel Workforce", "- Executive Order (E.O.) 12721", "- Interagency Career Transition Assistance Plan", "- Land Management Workforce Flexibility Act", "- Military Spouses, under Executive Order (E.O.) 13473", "- Non-Appropriated Fund Instrumentality (NAFI)", "- Non-Department of Defense (DoD) Transfer", "- Office of Personnel Management (OPM) Interchange Agreement Eligible", "- People with Disabilities, Schedule A", "- Postal Service/Peace Corps and Other Unique Authorities", "- Reinstatement", "- Veterans Employment Opportunity Act (VEOA) of 1998", "- Veterans Recruitment Appointment (VRA)", "In order to qualify, you must meet the education and/or experience requirements described below. Experience refers to paid and unpaid experience, including volunteer work done through National Service programs (e.g., Peace Corps, AmeriCorps) and other organizations (e.g., professional; philanthropic; religious; spiritual; community; student; social). You will receive credit for all qualifying experience, including volunteer experience. Your resume must clearly describe your relevant experience; if qualifying based on education, your transcripts will be required as part of your application", "Specialized Experience: One year of specialized experience which includes applying military personnel principles, concepts, legal requirements or methodology to gather facts, respond to questions, ensure regulatory compliance, and provide advisory services; reviewing military personnel actions to ensure compliance with regulatory guidance; providing guidance to subordinate units on personnel management issues; utilizing automated systems to support various military personnel programs; conducting staff assistance visits and inspections to subordinate units; preparing and providing reports to higher echelons of command; and analyzing data to identify issues. This definition of specialized experience is typical of work performed at the second lower grade/level position in the federal service (GS-09).", "OR", "Education: Ph.D. or equivalent doctoral degree or 3 full years of progressively higher level graduate education leading to such a degree in a field which demonstrates the knowledge, skills, and abilities necessary to do the work of the position, such as: HR Management, Public Administration, Business Administration, and Management.", "OR", "Combination of Education and Experience: A combination of education and experience may be used to qualify for this position as long as the computed percentage of the requirements is at least 100%. To compute the percentage of the requirements, divide your total months of experience by 12. Then divide the total number of completed graduate semester hours (or equivalent) beyond the second year (total graduate semester hours minus 36) by 18. Add the two percentages.", "You will be evaluated on the basis of your level of competency in the following areas:", "- Managing Human Resources", "- Oral Communication", "- Personnel and Human Resources", "- Problem Solving", "- Strategic Thinking", "Time in Grade Requirement: Applicants who have held a General Schedule (GS) position within the last 52 weeks must have 52 weeks of Federal service at the next lower grade or equivalent (GS-09)."]',
	'FOREIGN EDUCATION: If you are using education completed in foreign colleges or universities to meet the qualification requirements, you must show the education credentials have been evaluated by a private organization that specializes in interpretation of foreign education programs and such education has been deemed equivalent to that gained in an accredited U.S. education program; or full credit has been given for the courses at a U.S. accredited college or university. For further information, visit: http://www.ed.gov/about/offices/list/ous/international/usnei/us/edlite-visitus-forrecog.html.',
	'["Male applicants born after December 31, 1959, must complete a Pre-Employment Certification Statement for Selective Service Registration.", "You will be required to provide proof of U.S. Citizenship.", "One year probationary period may be required.", "Direct deposit of pay is required.", "Selection is subject to restrictions resulting from Department of Defense referral system for displaced employees.", "If you have retired from federal service and you are interested in employment as a reemployed annuitant, see the information in the Reemployed Annuitant information sheet.", "This is a Human Capital and Resource Management Career Field position.", "Multiple positions may be filled from this announcement.", "Salary includes applicable locality pay.", "Payment of Permanent Change of Station (PCS) costs is not authorized, based on a determination that a PCS move is not in the Government interest."]'
);



create table likes(
   id serial,
   user_id bigint unsigned,
   job_id bigint unsigned,
   foreign key (user_id) references users(id) on delete cascade,
   foreign key (job_id) references jobs(id) on delete cascade
   
);
