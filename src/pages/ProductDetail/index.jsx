import React, { useEffect, useRef, useState } from "react";
import api from "../../apiClient";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  let controllerRef = useRef(null);
  useEffect(() => {
    const fetchProductData = async () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();
      try {
        const response = await api.get(`products/${id}/`, {
          signal: controllerRef.current.signal,
        });
        setProductDetail(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        if (error.name == "AbortError") {
          console.error("Request Timed Out.");
          return;
        }
        console.error(error.message);
      }
    };
    fetchProductData();
  }, [id]);

  return (
    <div>
      <p>{productDetail?.name}</p>
      <p>{productDetail?.price}</p>
    </div>
  );
};

export default ProductDetail;
