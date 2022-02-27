import { TableCell, TableRow } from "@material-ui/core";
import Money from "@saleor/components/Money";
import Skeleton from "@saleor/components/Skeleton";
import TableCellAvatar from "@saleor/components/TableCellAvatar";
import { AVATAR_MARGIN } from "@saleor/components/TableCellAvatar/Avatar";
import { makeStyles } from "@saleor/macaw-ui";
import { maybe } from "@saleor/misc";
import {
  OrderDetails_order_fulfillments_lines,
  OrderDetails_order_lines
} from "@saleor/orders/types/OrderDetails";
import React from "react";

const useStyles = makeStyles(
  theme => ({
    colName: {},
    colNameLabel: {
      marginLeft: AVATAR_MARGIN
    },
    colPrice: {
      textAlign: "right"
    },
    colQuantity: {
      textAlign: "center"
    },
    colSku: {
      textAlign: "right",
      textOverflow: "ellipsis"
    },
    colTotal: {
      textAlign: "right"
    },
    infoLabel: {
      display: "inline-block"
    },
    infoLabelWithMargin: {
      marginBottom: theme.spacing()
    },
    infoRow: {
      padding: theme.spacing(2, 3)
    },
    orderNumber: {
      display: "inline",
      marginLeft: theme.spacing(1)
    },
    statusBar: {
      paddingTop: 0
    }
  }),
  { name: "TableLine" }
);

interface TableLineProps {
  line: OrderDetails_order_fulfillments_lines | OrderDetails_order_lines;
  isOrderLine?: boolean;
}

const TableLine: React.FC<TableLineProps> = ({
  line: lineData,
  isOrderLine = false
}) => {
  const classes = useStyles({});
  const { quantity, quantityToFulfill } = lineData as OrderDetails_order_lines;

  if (!lineData) {
    return <Skeleton />;
  }

  const line = isOrderLine
    ? ({
        ...lineData,
        orderLine: lineData
      } as OrderDetails_order_fulfillments_lines)
    : (lineData as OrderDetails_order_fulfillments_lines);

  const quantityToDisplay = isOrderLine ? quantityToFulfill : quantity;

  return (
    <TableRow key={line.id}>
      <TableCellAvatar
        className={classes.colName}
        thumbnail={maybe(() => line.orderLine.thumbnail.url)}
      >
        {maybe(() => line.orderLine.productName) || <Skeleton />}
      </TableCellAvatar>
      <TableCell className={classes.colSku}>
        {line?.orderLine ? line.orderLine.productSku : <Skeleton />}
      </TableCell>
      <TableCell className={classes.colQuantity}>
        {quantityToDisplay || <Skeleton />}
      </TableCell>
      <TableCell className={classes.colPrice} align="right">
        {maybe(() => line.orderLine.unitPrice.gross) ? (
          <Money money={line.orderLine.unitPrice.gross} />
        ) : (
          <Skeleton />
        )}
      </TableCell>
      <TableCell className={classes.colTotal} align="right">
        <Money
          money={{
            amount: line.quantity * line.orderLine.unitPrice.gross.amount,
            currency: line.orderLine.unitPrice.gross.currency
          }}
        />
      </TableCell>
    </TableRow>
  );
};

export default TableLine;