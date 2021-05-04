import FormField from './FormField';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__navbar">
        Shopping Cart
      </div>
      <FormField name="First name" validationLength={2} />
      <FormField name="Last name" validationLength={2} />
      <FormField name="Occupation" validationLength={4} />
    </div>
  );
}

export default App;
