import React, { useCallback, useState } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';

function MainPage() {
  const [value, setValue] = useState('');
  const onChange = useCallback((e: any) => {
    e.preventDefault();
    setValue(e);
  }, []);
  return (
    <div>
      <Button width={200}>dd</Button>
      <Input
        name="todo"
        type="text"
        value={value}
        onChange={onChange}
        className="todo-input"
        placeholder="할일을 입력해주세요."
        width={300}
      />
    </div>
  );
}

export default MainPage;
