import Chef from "../src/assets/chef-claude-icon.png"
export default function Header(){
    return (
    <header className="header">
        <img src={Chef} alt="" />
        <h1>Chef Claude</h1>
    </header>
    )
}