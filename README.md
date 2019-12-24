Automation test API by Jenkins
==========================

1. Set Up Jenkins Environment: https://www.blazemeter.com/blog/how-to-install-jenkins-on-windows/
2. Install NewMan: npm install -g newman
3. Create Collection in PostMan:

  3.1 Architecture Collection: Have postman-newman-testing folder and three sub-folder: status-401,402,403
![Capture](https://user-images.githubusercontent.com/49127076/71408428-c619e580-2670-11ea-8027-27af519061e3.PNG)

  3.2 Architecture Enviroment:
![Capture](https://user-images.githubusercontent.com/49127076/71408503-1729d980-2671-11ea-9b5a-37b7872961c0.PNG)

4. Test Case Basic for API: 
![Capture](https://user-images.githubusercontent.com/49127076/71409066-d6cb5b00-2672-11ea-86f6-572843965004.PNG)

5. Intergrate to run collection in JenKins:

5.1 Create New Item (Choose PipeLine)

5.2 Config Jenkin:

![Capture](https://user-images.githubusercontent.com/49127076/71409397-0464d400-2674-11ea-8753-794cbdab7f2e.PNG)



