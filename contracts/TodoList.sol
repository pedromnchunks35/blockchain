pragma solidity ^0.5.0;

//contrato
contract TodoList{
 //state variable cannot be negative (uint)
 uint public taskCount = 0;
 //struct da task
 struct Task{
  uint id;
  string content;
  bool completed;
 }

//convert task to an uint and return tasks (this is an array where the items are hashed)
mapping(uint => Task) public tasks;

constructor() public{
    createTask("Check out dappuniversity.com");
}

//finction to create the task
function createTask(string memory _content) public{
 //increment an task
 taskCount ++;
 //storing tasks in the position that taskCount tells us 
 tasks[taskCount] = Task(taskCount,_content,false);
}

}




