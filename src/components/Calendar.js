import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme => ({
    root: {
        flex: '1 1 auto',
        overflow: 'auto hidden',
    },
    table: {
        height: '100%'
    },
    row: {
        height: 'calc(100% / 5)',
    },
    cell: {
        outline: '1px solid black',
        width: 'calc(100% / 7)',
        '&:hover': {
            cursor: 'pointer',
            background: '#6c757d20',
        }
    },
})));

function Cell(props) {
    const classes = useStyles();
    
    return (
        <TableCell className={classes.cell} align={'center'}>
            <Typography variant="h1" component="h2">
                {props.day}
            </Typography>
        </TableCell>
    );
}

function Calendar(props) {
    const classes = useStyles();
    
    return (
        <TableContainer className={classes.root} component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.row}>
                        <Cell day={'SUN'} width="calc(100% / 7)" />
                        <Cell day={'MON'} width="calc(100% / 7)" />
                        <Cell day={'TUE'} width="calc(100% / 7)" />
                        <Cell day={'WED'} width="calc(100% / 7)" />
                        <Cell day={'THU'} width="calc(100% / 7)" />
                        <Cell day={'FRI'} width="calc(100% / 7)" />
                        <Cell day={'SAT'} width="calc(100% / 7)" />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={classes.row}>
                        <Cell day={'1'}/>
                        <Cell day={'2'}/>
                        <Cell day={'3'}/>
                        <Cell day={'4'}/>
                        <Cell day={'5'}/>
                        <Cell day={'6'}/>
                        <Cell day={'7'}/>
                    </TableRow>
                    <TableRow>
                        <Cell day={'8'}/>
                        <Cell day={'9'}/>
                        <Cell day={'10'}/>
                        <Cell day={'11'}/>
                        <Cell day={'12'}/>
                        <Cell day={'13'}/>
                        <Cell day={'14'}/>
                    </TableRow>
                    <TableRow>
                        <Cell day={'15'}/>
                        <Cell day={'16'}/>
                        <Cell day={'17'}/>
                        <Cell day={'18'}/>
                        <Cell day={'19'}/>
                        <Cell day={'20'}/>
                        <Cell day={'21'}/>
                    </TableRow>
                    <TableRow>
                        <Cell day={'22'}/>
                        <Cell day={'23'}/>
                        <Cell day={'24'}/>
                        <Cell day={'25'}/>
                        <Cell day={'26'}/>
                        <Cell day={'27'}/>
                        <Cell day={'28'}/>
                    </TableRow>
                    <TableRow>
                        <Cell day={'29'}/>
                        <Cell day={'30'}/>
                        <Cell day={'31'}/>
                        <Cell day={'1'}/>
                        <Cell day={'2'}/>
                        <Cell day={'3'}/>
                        <Cell day={'4'}/>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Calendar;