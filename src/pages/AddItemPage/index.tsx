import React, { useState, useCallback } from 'react';
import Input from '../../components/atoms/Input';
import SubmitButton from '../../components/atoms/SubmitButton';
import { Container, Label } from './style';
function AddItemPage() {
  const [value, setValue] = useState('');
  const [postImages, setPostImages] = useState<any[]>([]); // 전송 이미지
  const [detailImages, setDetailImages] = useState<any[]>([]); // 이미지 미리보기

  const onChange = useCallback((e: any) => {
    e.preventDefault();
    setValue(e);
  }, []);
  const onChangeUploadFile = (event: any) => {
    const fileArr = event.target.files; //  사용자가 선택한 파일들
    setPostImages(Array.from(fileArr)); //
    const fileURLs: (string | any)[] = [];
    const filesLength = fileArr.length > 10 ? 10 : fileArr.length; // 최대 10개
    // 프리뷰
    for (let i = 0; i < filesLength; i++) {
      const file = fileArr[i];
      const reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setDetailImages([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = useCallback(() => {
    const formData = new FormData();
    // try {
    //   await axios.post(`/`, formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }, []);
  return (
    <Container>
      <h2>상품 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-con">
          <Label>브랜드명</Label>
          <Input
            name="brand-name"
            type="text"
            value={value}
            onChange={onChange}
            className="todo-input"
            placeholder="브랜드명을 입력해주세요"
            width={300}
          />
        </div>
        <div className="input-con">
          <Label>상품명</Label>
          <Input
            name="item-name"
            type="text"
            value={value}
            onChange={onChange}
            className="todo-input"
            placeholder="상품명을 입력해주세요"
            width={300}
          />
        </div>
        <div className="input-con">
          <Label>가격</Label>
          <Input
            name="price"
            type="text"
            value={value}
            onChange={onChange}
            className="todo-input"
            placeholder="판매가격을 입력해주세요"
            width={300}
          />
        </div>
        <div className="input-con">
          <Label>상품정보(글)</Label>
          <Input
            name="price"
            type="text"
            value={value}
            onChange={onChange}
            className="todo-input"
            placeholder="판매가격을 입력해주세요"
            width={300}
          />
        </div>
        <div className="input-con">
          <Label>상품정보(이미지)</Label>
          <input
            className="image"
            type="file"
            accept="image/*"
            multiple
            onChange={onChangeUploadFile}
          />
        </div>
        {/* <SubmitButton width={100}>등록</SubmitButton> */}
      </form>
      {detailImages.map(url => {
        return <img alt={url} key={url} src={url} />;
      })}
    </Container>
  );
}

export default AddItemPage;
