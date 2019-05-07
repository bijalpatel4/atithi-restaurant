
function Product(name, image, description,price){
	this.name = name;
	this.image = image;
	this.description = description;
	this.price = price;
	this.show = show;
}
function show(){
	document.write("<img class ='photo' src='"+ this.image + "'>");	
	document.write( this.description );
	document.write( "$" + this.price);

}

var vegetablePakora = new Product("Vegetable Pakora","images/vegetablepakora.jpeg","Assorted fresh vegetables lightly battered, fried and served as crispy, golden fritters.",4);
var vegetableSamosa = new Product("Vegetable Samosa","images/samosa.jpg","Delicate pastries stuffed with green peas and mildly spiced potatoes, fried and served a flaky golden brown.",5);
var paniPuri = new Product("Pani Puri","images/panipuri.jpeg","It consists of a round, hollow puri, fried crisp and filled with a mixture of flavored water (commonly known as imli pani), tamarind chutney, chili, chaat masala, potato, onion or chickpeas.",10.99);
var papadiChat = new Product("Papadi Chat","images/papdichat.jpg","Chickpeas, minced potatoes, crispy fritters, and yogurt sprinkled with a dash of black Indian salt and served chilled. ",6);
var dahiPakoda = new Product("Dahi Pakoda","images/papdichat.jpg","Chickpeas, minced potatoes, crispy fritters, and yogurt sprinkled with a dash of black Indian salt and served chilled. ",6);

var malaiKofta = new Product("Malai Kofta","images/malaikofta.jpeg","Seasoned vegetables minced and shaped into kabob balls, fried and served in onion and tomato sauce with toasted nuts and raisins.",14.99);
var paneerMakhanni = new Product("Paneer Makhani","images/paneermakhai.jpeg","House-made cheese curds simmered in tomato-based makhanni gravy with toasted nuts and raisins.",14.99);
var mixedVegetable = new Product("Mixed Vegetable","images/mixedvegetable.jpg","A variety of seasonal vegetables gently stewed and served in a spicy, delicate curry sauce. ",13.99);
var dalMakhani = new Product("Dal Makhai","images/dalmakhani.jpg","Our buttery lentils made from creamed legumes prepared in a rich butter sauce with a hint of spice.",13.99);

var plainParatha = new Product("Plain Paratha","images/plainparatha.jpg","Aab India’s tasty whole-wheat dough is folded into layers, baked, and served warm.",4.99);
var tandooriChapati = new Product("Tandoori Chapati","images/tandoorichapati.jpeg","Rustic, whole-wheat flatbread baked fresh daily in Aab India’s tandoor oven.",3.99);
var butterNaan =new Product("Butter Naan","images/butternaan.jpg","House-made, leavened flatbread is baked in our tandoori oven, served soft and golden brown. ",3.99);
var garlicNaan = new Product("Garlic Naan","images/garlicnaan.jpg","House-made nan with fresh garlic baked in our tandoori oven, served soft and golden brown.",5.99);

var rasMalai = new Product("Ras Malai","images/rasmalai.jpeg","Our flaky, house-made cheese pastry served in a dollop of sweat cream and sprinkled with cold pistachios.",6.99);
var gulabJamun = new Product("Gulab Jamun","images/gulabjamun.jpg","Two delectable house-made cheese globes, deep fried and served warm in a bath of honey syrup.",5.99);
var kheer = new Product("kheer","images/kheer.jpg","This traditional Indian style rice pudding is served cool and sprinkled with pistachios.",5.99);
var gajarHalwa = new Product("Gajar Halwa","images/gajarhalwa.jpg","A popular Diwali and Holi dessert of grated carrots, condensed milk and butter, cooked and garnished with pistachios.",6.99);

var appetizer = [vegetablePakora,vegetableSamosa,paniPuri,papadiChat, dahiPakoda];
var mainCourse = [malaiKofta,paneerMakhanni,mixedVegetable,dalMakhani];
var breads = [plainParatha, tandooriChapati,butterNaan,garlicNaan];
var desserts = [rasMalai,gulabJamun,kheer,gajarHalwa];

var catagories = [appetizer,mainCourse,breads,desserts];
var nameOfCatagories = ["Appetizer","Main Course","Breads","Desserts"];
var headingOftable = ["Product Name", "Image", "Description","Price"]; 



function displayMenu() {
	document.write("<table><tr><th> Catagories </th>");
	for(var item of headingOftable){
		document.write("<th>"+ item +"</th>");
	}
	document.write("</tr>");
	for(j=0;j< catagories.length;j++){
		document.write("<tr><th rowspan='"+(catagories[j].length + 1) +"'>"+ nameOfCatagories[j]+"</th></tr>");
		for(k=0; k<catagories[j].length ;k++){
			document.write("<tr>") 
			document.write("<td>"+ catagories[j][k].name +"</td>");
			document.write("<td><img src='"+ catagories[j][k].image +"'alt='photo'></td>");
			document.write("<td>"+ catagories[j][k].description +"</td>");
			document.write("<td> $"+ catagories[j][k].price +"</td>");
			document.write("</tr>");
		}
	}
	document.write("</table>");
}