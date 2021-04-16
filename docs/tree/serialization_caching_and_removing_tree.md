---
sidebar_label: Serializing and Caching Tree  
title: Serializing and Caching Tree  
---     

```tododelete не используется?``` 


Serializing Tree  
------------------

The user can get an XML representation (as a string) of the tree using the method serializeTree():

~~~js
tree.serializeTree();  
~~~

Also there is a possibility to return the tree as a JSON string like this:

~~~js
tree.serializeTreeToJSON(); 
~~~


Setting Serialization Level  
----------------------------

XML serialization can be easily configured in the following way:

~~~js
tree.setSerializationLevel(userData,fullXML,escapeEntities,userDataAsCData,DTD); 
~~~

The parameters are as follows:

-  userData - enable/disable user data serialization;
-  fullXML - enable/disable full XML serialization;
-  escapeEntities - convert tag brackets into related HTML entities;
-  userDataAsCData - output user data in CDATA sections;
-  DTD - if specified set as XML's DTD.


Preventing Caching in IE  
-------------------------

The user can prevent caching in IE by adding random value to URL string with the help of the preventIECaching() method:

~~~js
tree.preventIECaching(true/false); // false by default
~~~

Registering XML Entity  
-------------------------

There is a possibility in dhtmlxTree to register an XML entity for replacement of special symbols during the initialization of the tree (the default ones are: ampersand, "less then" and "greater then" symbols):

~~~js
tree.registerXMLEntity(rChar,rEntity);
~~~

The parameters are the following:


-  rChar - source char;
-  rEntity - target entity.

Removing Tree  
----------------

There is a simple method that allows the user to remove the tree completely and to clear memory:

~~~js
tree.destructor();  
~~~

