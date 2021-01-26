# QuBE

เว็บแอปพลิเคชันเพื่อการเรียนรู้และทดลองกระบวนการทางควอนตัมคอมพิวเตอร์. 
(Web application for learning and experiment quantum computing).

### การติดตั้ง
1. ดาวน์โหลด source code ผ่านคำสั่ง
```
git clone https://github.com/Kadphol/QuBEv2.git
```
- หรือทำด้วยการคลิกตามรูปด้านล่างจากนั้นให้ทำการคลายซิปไฟล์ <br>
![image](https://user-images.githubusercontent.com/46192417/105846409-b9538800-600e-11eb-925c-7cfa450caa4c.png) <br>


2. เมื่อดาวโหลดเสร็จสิ้นแล้วไปที่โฟลเดอร์ของโปรแกรมที่ดาวน์โหลดเพื่อใช้คำสั่ง
```
docker-compose up
```
3. เมื่อใช้งานคำสั่งจะขึ้นดังรูป ให้รอจนมีการติดตั้งเสร็จสิ้น <br>
![image](https://user-images.githubusercontent.com/46192417/105848282-57e0e880-6011-11eb-8930-1741f72889ea.png) <br>

4. เมื่อติดตั้งเสร็จสิ้นจะขึ้นดังรูปภาพ <br>
![image](https://user-images.githubusercontent.com/46192417/105848571-bad27f80-6011-11eb-9015-3ec59879f24c.png) <br>

5. สามารถเข้าสู่เว็บแอปพลิเคชันผ่านทางลิ้งค์ `localhost:3000`


# ข้อตกลงในการใช้ซอฟต์แวร์ (Disclaimer)
ซอฟต์แวร์นี้เป็นผลงานที่พัฒนาขึ้นโดย นาย กาจพล เล็งเลิศผล, นางสาว ธนพร ญาณโกมุท และนาย วรภัทร ทับทิมดี จาก มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี ภายใต้การดูแลของ ดร. อัญชลิสา แต้ตระกูล ภายใต้โครงการ เว็บแอปพลิเคชันสำหรับการเรียนรู้และทดลองกระบวนการทางควอนตัมคอมพิวเตอร์ ซึ่งสนับสนนุ โดย สํานักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ โดยมีวัตถุประสงค์เพื่อส่งเสริมให้ นักเรียนและนักศึกษาได้เรียนรู้และฝึกทักษะในการพัฒนาซอฟต์แวร์ ลิขสิทธิ์ของซอฟต์แวร์นี้จึงเป็นของผู้พัฒนา ซึ่งผู้พัฒนาได้อนุญาตให้สําานักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ เผยแพร่ซอฟต์แวร์นี้ตาม “ต้นฉบับ” โดยไม่มีการแก้ไขดัดแปลงใดๆ ทั้งสิ้น ให้แก่บุคคลทั่วไปได้ใช้ เพื่อประโยชน์ส่วนบุคคลหรือประโยชน์ทางการศึกษาที่ไม่มีวyต ถุประสงค์ในเชิงพาณิชย์ โดยไม่คิด ค่าตอบแทนการใช้ซอฟต์แวร์ดังนั้นสําานักงานพัฒนาวทิยาศาสตร์และเทคโนโลยีแห่งชาติจึงไม่มี หน้าที่ในการดูแล บํารุงรักษา จัดการอบรมการใช้งาน หรือพัฒนาประสิทธิภาพซอฟต์แวร์ รวมทั้ง ไม่รับรองความถูกต้องหรือประสิท ธิภาพการทําางานของซอฟต์แวร์ ตลอดจนไม่รับประกันความเสียหายต่างๆ อันเกิดจากการใช้ซอฟต์แวร์นี้ทั้งสิ้น

---
# QuBE

Interactive website for learning and experimenting basic quantum computing (Senior Project). 

### Feature:
- Introduction of website and video preview of Quantum computing.
- Explore through quantum world with interactive media for learning quantum computing.
- Playground for learning and experiment quantum circuit simulator.
- Challenge for comprehensive testing of quantum computing skill.

### Implement:
- React v16.8 (create-react-app v4.0.1 with typescript 4 template).
- Node.js v12.19:alpine3.9.
- Express v4.16.
- MongoDB v4.0.

# Server Config
Start <br>
`docker-compose up -d`  or `make start`<br>

Stop <br>
`docker-compose down`  or `make stop`<br>

|SERVE|URL|
|-|-|
|Frontend|locahost:3000|
|Backend|localhost:80|
|MongoDB|mongodb://db:27017/qube<br>localhost:27017|

# License Agreement
This software is a work developed by Mr. Kadphol Lenglerdphol, Ms. Thanaporn Yankomut and Mr. Worapat Tubtimdee from King Mongkut’s University of Technology Thonburi under the provision of Dr. Unchalisa Taetragool under Web application for learning and experiment quantum computing , which has been supported by the National Science and Technology Development Agency (NSTDA), in order to encourage pupils and students to learn and practice their skills in developing software. Therefore, the intellectual property of this software shall belong to the developer and the developer gives NSTDA a permission to distribute this software as an “as is ” and non-modified software for a temporary and non-exclusive use without remuneration to anyone for his or her own purpose or academic purpose, which are not commercial purposes. In this connection, NSTDA shall not be responsible to the user for taking care, maintaining, training or developing the efficiency of this software. Moreover, NSTDA shall not be liable for any error, software efficiency and damages in connection with or arising out of the use of the software.”

