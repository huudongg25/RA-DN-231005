import React, { useMemo, useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Cart } from "../../type";
import { ToastContainer } from "react-toastify";
import { CiTrash } from "react-icons/ci";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface Props {
  carts: Cart[];
  handlePlus: Function;
  handleMinus:Function
  handleDelete:Function
}

const TableCart: React.FC<Props> = (props: Props) => {
  console.log(props.carts);
  const columns: any = [
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      render: (data: any) => <img width={100} src={data} />,
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "id",
      render: (id: any) => {
        const index = props.carts.findIndex((item) => item.id == id);
        console.log(id);
        return (
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <button
              onClick={() => props.handlePlus(id)}
              style={{ padding: 10 }}
            >
              +
            </button>
            {props.carts[index].quantity}
            <button onClick={()=>{props.handleMinus(id)}} style={{ padding: 10 }}>-</button>
          </div>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Actions",
      dataIndex: "id",
      render: (data:number) => <div>
        <CiTrash onClick={()=>props.handleDelete(data)} style={{fontSize:25}} />
      </div>,
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const newCart = useMemo(() => {
    const result = props.carts.map((item) => {
      return {
        ...item,
        totalPrice: item.price * item.quantity,
      };
    });
    return result;
  }, [props.carts]);

  return (
    <div>
      <ToastContainer />
      <div style={{ marginBottom: 16 }}></div>
      <Table columns={columns} dataSource={newCart} />
    </div>
  );
};

export default TableCart;
