import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './main.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faPlus, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >

                    <Typography><span className="text2"><FontAwesomeIcon icon={faQuestionCircle} color={"#3366CC"}/> Для чего это нужно?</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className="text2">
                        Мы разработали сервис поиска организации в различных реестрах
                        социально-ориентированных (СО) некоммерческих организаций (НКО). Наличие
                        организации в этих реестрах даёт ей основание получать дополнительные меры
                        государственной поддержки в период распространения новой коронавирусной
                        инфекции. Для поиска Вам понадобится ОГРН или ИНН организации
                            </span>
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography><span className="text2"><FontAwesomeIcon icon={faPlus} color={"#3366CC"}/> Как внести свою организацию в список?</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className="text2">
                        К категории некоммерческие организации (НКО)
                        относятся организации, не имеющие извлечение прибыли в качестве основной цели своей
                        деятельности и не
                        распределяющие полученную прибыль между участниками.<br/>
                        Подробнее <a href="http://covid.economy.gov.ru/nko"> о мерах поддержки здесь</a>
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography><span className="text2"><FontAwesomeIcon icon={faFile} color={"#3366CC"}/> Список мер поддержки государства</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <span className="text2">
                        Сервис позволяет свериться с реестром СО НКО Минэкономразвития России,
                        региональным перечнем организаций, наиболее пострадавших в условиях распространения
                        новой коронавирусной инфекции и претендующих на дополнительные меры государственной
                        поддержки, и реестром некоммерческих организаций-исполнителей общественно полезных
                        услуг Минюста России
                        </span>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}