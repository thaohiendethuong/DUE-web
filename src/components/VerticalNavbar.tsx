// Navbar.tsx
import { useState } from 'react';

// Define the type for props
interface NavbarProps {
  onCreate: (textInput: string) => Promise<void>;
}

const VerNavbar: React.FC<NavbarProps> = ({ onCreate }) => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(event.target.value);
  };

  const handleCreateClick = () => {
    onCreate(textInput);
  };

  return (
    <div className="navbar">
      <h2>Tạo thiết kế AI</h2>
      <input
        type="text"
        value={textInput}
        onChange={handleInputChange}
        placeholder="Nhập văn bản"
        className="input-box"
      />
      <button onClick={handleCreateClick} className="cta-button">
        Tạo
      </button>
    </div>
  );
};

export default VerNavbar;
