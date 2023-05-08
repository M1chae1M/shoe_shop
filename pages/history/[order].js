import React, { Component } from "react";

export default class Order extends Component {
  static async getStaticPaths() {
    const paths = [];
    for (let i = 110; i <= 130; i++) {
      paths.push({ params: { order: `${i}` } });
    }
    return {
      paths,
      fallback: false,
    };
  }

  static async getStaticProps({ params }) {
    const { orderId } = params;
    return {
      props: {
        orderId,
      },
    };
  }

  render() {
    const { orderId } = this.props;

    return (
      <div>
        <h1>Order {orderId}</h1>
      </div>
    );
  }
}
