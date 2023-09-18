Feature: End to end flow

  Scenario: End to end test flow assignmet
    Given User Launch application
    And User click on Update button in edit option
    And User select Share with Assignment 1
    And User write updates mesg as "test Update Message"
    And User click on attach option
    And User Upload file
    And User verify tick mark and click on share
    Then User verify msg "test Update Message" under uploaded file


   