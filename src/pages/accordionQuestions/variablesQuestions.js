const questions = [
    {
      id: 1,
      title: 'What Is The Variable?',
      info:
        'Variable is a name which is given to a memory cell. Variable is also known as a container (or box) which is used to store data value during program execution in memory.',
    },
    {
      id: 2,
      title: 'How To Declare A Variable In Java?',
      info: 'Java is known as strictly typed language as it is mandatory to specify a data type of a variable before variable name. It is used by compiler to help programmer avoid any mistakes such as storing String values to integer variables. Before reading or assigning a value, that variable must have been declared.'  ,
        image:'https://media.geeksforgeeks.org/wp-content/uploads/20191110223008/java-declare.jpeg'
    },
    {
      id: 3,
      title: 'How To Assign A Value To Variable?',
      info:
        'We use assign operator (=) to assign a value to a variable.We can assign a value to variable any number of time in java, but when we assign a new value to a variable old value will be overwritten. ',
      image: 'https://runestone.academy/ns/books/published/csjava/_images/assignment.png'
      },
    {
      id: 4,
      title: 'What Is Variable Initialization?',
      info:'When we assign a value to a variable first time, it is known as variable initialization. Before initialization objects have a null value (meaning no value) and primitive types have default values such as 0 or false.',
    },
    {
      id: 5,
      title: 'Why Is Specifying DataType Mandatory In Java?',
      info:'Data type of a variable is an attribute which tells what kind of data that variable can have. Every java variable takes up a certain amount of space in memory. How much memory a variable takes is depends on its datatype.',
    },
    {
      id: 6,
      title: 'How Can You Create Constants In Java?',
      info: 'So, what is constant? We can assign values to variable any number of time, but what if we want variable value to be fixed and we do not want developers to change its value, once variable is initialized. We can achieve this by declaring variable as final using the final keyword. ',
      image :'https://3.bp.blogspot.com/-WWyJnsWY2ek/WMpP5o5RVlI/AAAAAAAAALA/WT5sMSwg5sQoS1iIfwhl8tvH6-HP7B0zgCLcB/s1600/final%2Bkeyword.gif'
    },
    {
      id: 7,
      title: 'What Are The Rules For Naming Java Variables?',
      info : `There are some rules related to Java variable names:

      Java Variable names are case sensitive. Variable declared as codepumpkin is different than CodePumpkin or CODEPUMPKIN.
      Variable name must start with a letter, or $ or _ character. No other special character or digits are allowed as first character of variable name.
      After the first character, java variable name can have digits as well along with letter, $ and _
      Variable name can not be equal to reserved keyword in java. For example, you can not give your variable name as int, if or boolean as they are reserved keyword in java.` ,
      image: 'https://i.ytimg.com/vi/YTL6exhIGs8/maxresdefault.jpg'
    },
  ]
  export default questions
  