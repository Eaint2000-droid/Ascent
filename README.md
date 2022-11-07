# Ascent

## Overview

With heightened expectations from digital natives today who would take their business elsewhere if unsatisfied, it has become more important than ever for businesses to utilise loyalty programs to increase customer retention.

*Ascenda Loyalty* aims to provide banks with a loyalty points processing platform for their customers across a variety of card programs. Our solution, **Ascent**, allows banks and merchants to
Process millions of transactions with specific spending rules for different card types taken into consideration
Flexibly launch and manage marketing campaigns
Showcase rewards accrued by users in the form of cashback, miles, and points in relation to their spending

## Running the web application 
### Amplify
To view the deployed web application, open https://www.itsag3t5.com on your browser.

### Development mode
To run the frontend web application locally, cd initial-app/frontend before running the npm start command. 
Open [http://localhost:3000](http://localhost:5000) to view it in your browser.

## Deploying web application to Amplify 
1. Sign in to the AWS Amplify console. 
2. Connect to the "project-2022-23t1-g3-t5" github branch. 
3. When writing the build settings, use amplify.yml located in the /initial-app/frontend/amplify folder.
4. Review your changes and then choose Save and deploy. The Amplify Console will pull code from your repository, build changes to frontend, and deploy your build artifacts.
## Links to other repos

- [Database Initialisation scripts](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-database-initialisation): Code used to setup the database by populating them with necessary data such as MCC codes.
- [File splitting](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-file-splitting): Function to retrive a file from S3, split records into 20k entries each and save them into their respective S3 buckets for further processing.
- [Users adding](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-batch-file-processing): Function to batch add 20k users and users_cards into the database sequentially.
- [Add users to mailing list](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-add-users-mailing-list): Add users to the main mailing list so that all the users in the mailing list will receive an email upon the start of a campaign.
- [Points processing](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-points-processing): Function to batch process the transactions by cross checking against for rewards, exclusions and campaigns before invoking another lambda function to save the details to the database.
- [Store transactions](https://github.com/cs301-itsa/project-2022-23t1-g3-t5-store-transactions): Function running after points processing with the purpose of saving the records to the DB.
- [Rest API](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-rest-api): Main function to parse different HTTP API calls from the frontend and return the necessary data.
- [Send Email](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-send-email): Function which sends an email when triggered by EventBridge when a campaign starts
- [Campaign Saving](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-campaign-saving): Function which saves a new campaign to the DB when added via the frontend by banks. Then it calls `Add new event`.
- [Add new event](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-trigger-cron-job-in-eventbridge): Adds a new event in EventBridge and stores the campaign details. This EventBridge event will trigger when the campaign starts.
- [Email alerts](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-emailAlerts): Function which sends alert emails upon a lambda failure or present of errors in lambda functions that is found in CloudWatch.
- [Research output](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-research-output): Repo which contains the output and raw results that are mentioned or referenced in the research report.
- [Transfer Family](https://github.com/cs301-itsa/project-2022-23t1-g3-team5-transfer-family): Repository containing the instructions and details for using AWS Transfer Family in our project.

## Frontend Screenshots

<img src="initial-app/screenshots/ascent.gif" width="500">

<p float="left">
  <img src="initial-app/screenshots/Ascent_home.PNG" width="500">
  <img src="initial-app/screenshots/Ascent_dashboard.PNG" width="500">
</p>
