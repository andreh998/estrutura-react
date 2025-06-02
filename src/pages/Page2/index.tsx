import Button from "../../components/Button";
import MainBox from "../../components/MainBox";

export default function Page2() {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <MainBox>
      <Button size="small" color="primary" text="Button 1" icon="home" onClick={handleButtonClick}/>
      <Button size="small" color="secondary" text="Button 1" icon="login" onClick={handleButtonClick}/>
      <Button size="small" color="warning" text="Button 1" icon="person" onClick={handleButtonClick}/>
    </MainBox>
  );
}